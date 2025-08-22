<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import UpdateEmail from '$lib/components/settings/UpdateEmail.svelte';
	import UpdateAvatar from '$lib/components/settings/UpdateAvatar.svelte';
	import DeleteAccount from '$lib/components/settings/DeleteAccount.svelte';
	import UpdatePassword from '$lib/components/settings/UpdatePassword.svelte';

	let { toggleAccountSettings = () => {}, updateModalData = () => {} } = $props();
</script>

<section class="mt-3" aria-labelledby="account-settings-form-title">
	<h3 id="account-settings-form-title" class="sr-only">Account settings</h3>
	<div class="rounded-md sm:p-4">
		<div class="card-foundation flex flex-col">
			<div class="px-4 pt-4">
                <button type="button" onclick={toggleAccountSettings} aria-label="Go to Dashboard" class="flex items-center text-xs cursor-pointer">
                    <ChevronLeftIcon class="size-3.5" />
                    Dashboard
                </button>
			</div>
			<div class="divide-y px-4 pb-4">
				<UpdateAvatar />
				<UpdateEmail />
				<UpdatePassword />
				<DeleteAccount {updateModalData} />
			</div>
		</div>
	</div>
</section>
