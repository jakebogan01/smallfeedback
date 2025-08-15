<script>
	import pb from '$lib/pocketbase.js';
	import { SIGNUP } from '$lib/constants.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { baseAuthSchema } from '$lib/utils/schemas/auth.js';
	import AuthForm from '$lib/components/auth/AuthForm.svelte';

	const formSchema = baseAuthSchema;
	let btnDisabled = $state(false);

	const form = superForm(
		defaults(
			{
				email: '',
				password: ''
			},
			zod(formSchema)
		),
		{
			SPA: true,
			validators: zod(formSchema),
			resetForm: true,
			onUpdate: async ({ form }) => {
				if (form.valid) {
					try {
						btnDisabled = true;
						await pb.collection('users').authWithPassword(form.data.email, form.data.password);
					} catch (error) {
						console.dir(error?.message, { depth: null });
						btnDisabled = false;
					}
				}
			}
		}
	);

	const { form: formData, enhance } = form;
</script>

<AuthForm {form} {formData} {enhance} pageType={SIGNUP} {btnDisabled} />
