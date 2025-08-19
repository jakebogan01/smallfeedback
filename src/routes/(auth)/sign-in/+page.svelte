<script>
	import pb from '$lib/pocketbase.js';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import Head from '$lib/components/Head.svelte';
	import { DASHBOARD, SIGNUP } from '$lib/constants.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { baseAuthSchema } from '$lib/schemas/auth.js';
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
			resetForm: false,
			onUpdate: async ({ form }) => {
				if (form.valid) {
					try {
						btnDisabled = true;
						await pb.collection('users').authWithPassword(form.data.email, form.data.password);
						await goto(DASHBOARD);
						toast.success('Successfully signed in!');
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

<Head
	page_title="SmallFeedBack | Sign-in"
	description="Sign in to SmallFeedBack to share anonymous feedback and opinions on topic boards. Join open discussions and help shape ideas without revealing your identity."
	keywords="SmallFeedBack sign in, anonymous feedback login, join feedback board, anonymous comments, opinion sharing, discussion board sign in, topic feedback"
/>

<AuthForm {form} {formData} {enhance} pageType={SIGNUP} {btnDisabled} useStrongPwd={false} />
