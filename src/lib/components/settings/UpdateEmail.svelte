<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { toast } from 'svelte-sonner';
	import { zod } from 'sveltekit-superforms/adapters';
	import { emailSchema } from '$lib/schemas/email.js';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';

	let btnDisabled = $state(false);
	const formSchema = emailSchema;

	const form = superForm(defaults({ email: '' }, zod(formSchema)), {
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
	});

	const { form: formData, enhance } = form;
</script>

<div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3">
	<div>
		<h2 class="text-base/7 font-semibold">Change email</h2>
		<p class="mt-1 text-sm/6">Update your email associated with your account.</p>
	</div>
	<form class="md:col-span-2" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<Input
						type="email"
						{...props}
						bind:value={$formData.email}
						inputmode="email"
						spellcheck="false"
						autocapitalize="none"
						autoComplete="email"
						minlength="1"
						maxlength="254"
						aria-label="Email address"
						required
					/>
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
