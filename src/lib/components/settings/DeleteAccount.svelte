<script>
	import { Button } from '$lib/components/ui/button/index.js';

	let { updateModalData = () => {} } = $props();

	const handleModal = () => {
		updateModalData({
			target: 'account',
			id: 1
		});
	};
</script>

<div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3">
	<div>
		<h2 class="text-base/7 font-semibold">Delete account</h2>
		<p class="mt-1 text-sm/6 text-gray-400">
			No longer want to use our service? You can delete your account here. This action is not reversible. All
			information related to this account will be deleted permanently.
		</p>
	</div>
	<form class="flex items-start md:col-span-2">
		<Button onclick={handleModal} type="button" class="cursor-pointer bg-destructive"
			>Yes, delete my account</Button
		>
	</form>
</div>
