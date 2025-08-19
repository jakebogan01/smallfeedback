<script>
	import { toast } from 'svelte-sonner';
	import { faker } from '@faker-js/faker';
	import { fly } from 'svelte/transition';
	import Head from '$lib/components/Head.svelte';
	import Nav from '$lib/components/dashboard/Nav.svelte';
	import Cards from '$lib/components/dashboard/Cards.svelte';
	import Header from '$lib/components/dashboard/Header.svelte';
	import Search from '$lib/components/dashboard/Search.svelte';
	import Controls from '$lib/components/dashboard/Controls.svelte';
	import Pagination from '$lib/components/dashboard/Pagination.svelte';
	import CardFilters from '$lib/components/dashboard/CardFilters.svelte';
	import CategoryCard from '$lib/components/dashboard/CategoryCard.svelte';
	import TagFilterCard from '$lib/components/dashboard/TagFilterCard.svelte';
	import GroupGraphicCard from '$lib/components/dashboard/GroupGraphicCard.svelte';
	import CreateSuggestionForm from '$lib/components/dashboard/CreateSuggestionForm.svelte';

	let showCreateForm = $state(false),
		changeLayout = $state(false),
		lastToastIds = $state([]),
		isShowing = $state(false),
		open = $state(false),
		resetTimeout;

	const TOAST_COUNT = 10;
	const BASE_DURATION = 4000;
	const STAGGER_DELAY = 150;

	const toggleLayout = () => (changeLayout = !changeLayout);
	const toggleCreateForm = () => (showCreateForm = !showCreateForm);

	const toggleNotifications = () => {
		if (isShowing) {
			lastToastIds.forEach((id) => toast.dismiss(id));
			lastToastIds = [];
			isShowing = false;
			if (resetTimeout) {
				clearTimeout(resetTimeout);
				resetTimeout = null;
			}
			return;
		}
		lastToastIds = Array.from({ length: TOAST_COUNT }, () => {
			return toast(faker.person.fullName(), {
				description: 'Has commented on your post!'
			});
		});
		isShowing = true;
		const maxDuration = BASE_DURATION + (TOAST_COUNT - 1) * STAGGER_DELAY;
		resetTimeout = setTimeout(() => {
			lastToastIds.forEach((id) => toast.dismiss(id));
			lastToastIds = [];
			isShowing = false;
			resetTimeout = null;
		}, maxDuration);
	};
</script>

<Head
	page_title="SmallFeedBack | Dashboard"
	description="View all feedback posts on your SmallFeedBack boards in one place. Track ideas, read opinions, and engage with anonymous community insights."
	keywords="feedback dashboard, view feedback posts, anonymous feedback list, feedback board manager, track community opinions, board insights"
/>

<div class="min-h-full">
	<Header {toggleNotifications} />

	<main class="mt-4 pb-8 lg:mt-0">
		<div class="mx-auto w-full px-4 sm:px-6 lg:max-w-350 lg:px-8">
			<h1 class="sr-only">Feedback Dashboard</h1>
			<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-6">
				<aside class="sticky top-8 order-2 hidden shrink-0 grid-cols-1 gap-4 lg:order-none lg:mt-8 lg:grid">
					<GroupGraphicCard />
					<TagFilterCard />
					<CategoryCard />
					<Controls {toggleNotifications} />
				</aside>
				<div class="order-1 grid grid-cols-1 lg:order-none lg:col-span-3 lg:mt-8">
					<Nav {toggleCreateForm} {showCreateForm} />
					{#if showCreateForm}
						<div
							in:fly={{ y: 50, duration: 500, delay: 500 }}
							out:fly={{ y: 50, duration: 500 }}
							class="pt-[4.224375rem]"
						>
							<CreateSuggestionForm {toggleCreateForm} />
						</div>
					{:else}
						<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 50, duration: 500 }}>
							<CardFilters {toggleLayout} {changeLayout} bind:open />
							<Cards {changeLayout} />
							<Pagination />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</main>
</div>

<Search bind:open />
