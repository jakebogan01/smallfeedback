<script>
	import { z } from 'zod';
	import pb from '$lib/pocketbase.js';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import { DASHBOARD, SIGNIN } from '$lib/constants.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import * as Password from '$lib/components/ui/password';
	import * as Form from '$lib/components/ui/form/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { baseAuthSchema } from '$lib/utils/schemas/auth.js';
	import AuthForm from '$lib/components/auth/AuthForm.svelte';

	let btnDisabled = $state(false);

	const formSchema = baseAuthSchema
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
				email: '',
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
						btnDisabled = true;
						await pb.collection('users').create(form.data);
						await pb.collection('users').authWithPassword(form.data.email, form.data.password);
						await goto(DASHBOARD);
						toast.success('Account successfully created!');
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

<AuthForm {form} {formData} {enhance} pageType={SIGNIN} {btnDisabled}>
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
</AuthForm>
