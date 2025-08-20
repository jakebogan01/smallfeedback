<script>
	import { faker } from '@faker-js/faker';
	import PenIcon from '@lucide/svelte/icons/pen';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import { Button } from '$lib/components/ui/button/index.js';

	let { toggleCreateForm = () => {}, showCreateForm, showSettingsPage } = $props();
</script>

<nav aria-labelledby="feedback-overview-title">
	<div class="card-foundation bg-primary p-6">
		<h2 id="feedback-overview-title" class="sr-only">Feedback Overview</h2>
		<div class="md:flex md:items-center md:justify-between md:space-x-5">
			<h1 class="flex items-center space-x-3 text-xl font-bold text-white">
				<LayersIcon
					class="size-6 !transition-transform {showSettingsPage || showCreateForm
						? 'scale-0 -rotate-90'
						: 'scale-100 rotate-0'}"
				/>
				<SettingsIcon
					class="absolute size-6 !transition-transform {showSettingsPage
						? 'scale-100 rotate-0'
						: 'scale-0 rotate-90'}"
				/>
				<PenIcon
					class="absolute size-6 !transition-transform {showCreateForm
						? 'scale-100 rotate-0'
						: 'scale-0 rotate-90'}"
				/>
				{#if showSettingsPage}
					<span>Account Settings</span>
				{:else if showCreateForm}
					<span>Create Suggestion</span>
				{:else}
					<span>{faker.number.int({ min: 1, max: 24 })} Suggestions</span>
				{/if}
			</h1>
			<div
				class="mt-4 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"
			>
				<Button
					type="button"
					onclick={toggleCreateForm}
					aria-label="Add your feedback"
					class="min-w-33 cursor-pointer bg-background py-5 text-sm font-bold text-black"
					>{showCreateForm ? 'Dashboard' : 'Add Feedback'}</Button
				>
			</div>
		</div>
	</div>
</nav>
