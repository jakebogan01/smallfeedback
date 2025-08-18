<script>
	import { faker } from '@faker-js/faker';
	import toast from 'svelte-5-french-toast';
	import Head from '$lib/components/Head.svelte';
	import Nav from '$lib/components/dashboard/Nav.svelte';
	import Cards from '$lib/components/dashboard/Cards.svelte';
	import Header from '$lib/components/dashboard/Header.svelte';
	import Search from '$lib/components/dashboard/Search.svelte';
	import Controls from '$lib/components/dashboard/Controls.svelte';
	import Pagination from '$lib/components/dashboard/Pagination.svelte';
	import CardFilters from '$lib/components/dashboard/CardFilters.svelte';
	import CategoryCard from '$lib/components/dashboard/CategoryCard.svelte';
	import Notifications from '$lib/components/dashboard/Notifications.svelte';
	import TagFilterCard from '$lib/components/dashboard/TagFilterCard.svelte';
	import GroupGraphicCard from '$lib/components/dashboard/GroupGraphicCard.svelte';
	import CreateSuggestionForm from '$lib/components/dashboard/CreateSuggestionForm.svelte';

	let showCreateForm = $state(false),
		changeLayout = $state(false),
		lastToastIds = $state([]),
		isShowing = $state(false),
		open = $state(false);

	const toggleLayout = () => (changeLayout = !changeLayout);
	const toggleCreateForm = () => (showCreateForm = !showCreateForm);

	const toggleNotifications = () => {
		if (isShowing) {
			toast.dismiss();
			lastToastIds = [];
			isShowing = false;
		} else {
			lastToastIds = [];
			for (let i = 0; i < 10; i++) {
				const id = toast(Notifications, {
					position: 'bottom-right',
					duration: 4000 + i * 100,
					props: {
						avatar: faker.image.avatar(),
						name: faker.person.fullName()
					}
				});
				lastToastIds.push(id);
			}
			isShowing = true;
			const maxDuration = 4000 + (10 - 1) * 150;
			setTimeout(() => {
				isShowing = false;
				lastToastIds = [];
			}, maxDuration);
		}
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
					<Nav {toggleLayout} {changeLayout} {toggleCreateForm} {showCreateForm} />
					{#if showCreateForm}
						<CreateSuggestionForm {toggleCreateForm} />
					{:else}
						<CardFilters bind:open />
						<Cards {changeLayout} />
						<Pagination />
					{/if}
				</div>
			</div>
		</div>
	</main>
</div>

<Search bind:open />
