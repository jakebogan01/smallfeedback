<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import UpdateEmail from '$lib/components/settings/UpdateEmail.svelte';
	import DeleteAccount from '$lib/components/settings/DeleteAccount.svelte';
	import UpdatePassword from '$lib/components/settings/UpdatePassword.svelte';
</script>

<section class="mt-3" aria-labelledby="account-settings-form-title">
	<h3 id="account-settings-form-title" class="sr-only">Account settings</h3>
	<div class="rounded-md bg-background/30 sm:p-4">
		<div class="card-foundation flex flex-col">
			<div class="divide-y divide-input p-4">
				<UpdateEmail />
				<UpdatePassword />
				<DeleteAccount />
			</div>
		</div>
	</div>
</section>
