<script>
	import { z } from 'zod';
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { toast } from 'svelte-sonner';
	import { zod } from 'sveltekit-superforms/adapters';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Password from '$lib/components/ui/password';
	import * as Form from '$lib/components/ui/form/index.js';
	import { passwordSchema } from '$lib/schemas/password.js';
	import { superForm, defaults } from 'sveltekit-superforms';

	let btnDisabled = $state(false);
	const formSchema = passwordSchema
		.extend({
			passwordConfirm: z.string()
		})
		.refine((data) => data.password === data.passwordConfirm, {
			message: 'Passwords must match',
			path: ['passwordConfirm']
		});

	const form = superForm(
		defaults(
			{
				password: '',
				passwordConfirm: ''
			},
			zod(formSchema)
		),
		{
			SPA: true,
			validators: zod(formSchema),
			resetForm: false,
			onUpdate: async ({ form }) => {
				if (form.valid) {
					try {
						console.log(form.data);
						// btnDisabled = true;
						// toast.success('Suggestion successfully created!');
					} catch (error) {
						btnDisabled = false;
						console.dir(error?.response, { depth: null });
						toast.error(error?.message);
					}
				}
			}
		}
	);

	const { form: formData, enhance } = form;
</script>

<div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3">
	<div>
		<h2 class="text-base/7 font-semibold">Change password</h2>
		<p class="mt-1 text-sm/6">Update your password associated with your account.</p>
	</div>
	<form class="md:col-span-2" use:enhance>
		<Form.Field {form} name="password">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Password</Form.Label>
					<Password.Root>
						<Password.Input
							type="password"
							{...props}
							bind:value={$formData.password}
							inputmode="text"
							spellcheck="false"
							autocapitalize="none"
							autoComplete="current-password"
							minlength="8"
							maxlength="71"
							aria-label="Password"
							required
						>
							<Password.ToggleVisibility class="cursor-pointer" />
						</Password.Input>
						<Password.Strength />
					</Password.Root>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="passwordConfirm">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Confirm Password</Form.Label>
					<Password.Root>
						<Password.Input
							type="password"
							{...props}
							bind:value={$formData.passwordConfirm}
							inputmode="text"
							spellcheck="false"
							autocapitalize="none"
							autoComplete="new-password"
							minlength="8"
							maxlength="71"
							aria-label="Password"
							required
						>
							<Password.ToggleVisibility class="cursor-pointer" />
						</Password.Input>
						<Password.Strength />
					</Password.Root>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="flex justify-end pt-2">
			<Form.Button disabled={btnDisabled} class="cursor-pointer">
				{#if btnDisabled}
					<Loader2Icon class="animate-spin" />
				{:else}
					Save
				{/if}
			</Form.Button>
		</div>
	</form>
</div>
