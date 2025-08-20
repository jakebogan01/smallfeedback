<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import UpdateEmail from '$lib/components/settings/UpdateEmail.svelte';
	import DeleteAccount from '$lib/components/settings/DeleteAccount.svelte';
	import UpdatePassword from '$lib/components/settings/UpdatePassword.svelte';

	let { toggleAccountSettings = () => {}, updateModalData = () => {} } = $props();
</script>

<section class="mt-3" aria-labelledby="account-settings-form-title">
	<h3 id="account-settings-form-title" class="sr-only">Account settings</h3>
	<div class="rounded-md bg-background/30 sm:p-4">
		<div class="card-foundation flex flex-col">
			<div class="px-4 pt-4">
				<Button
					onclick={toggleAccountSettings}
					variant="ghost"
					class="flex h-auto cursor-pointer items-center !p-0 text-xs"
				>
					<ChevronLeftIcon class="size-3.5" />
					Dashboard
				</Button>
			</div>
			<div class="divide-y divide-input px-4 pb-4">
				<UpdateEmail />
				<UpdatePassword />
				<DeleteAccount {updateModalData} />
			</div>
		</div>
	</div>
</section>
