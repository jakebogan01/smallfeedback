<script>
	import Logo from '$lib/components/Logo.svelte';
	import Head from '$lib/components/Head.svelte';
	import Nav from '$lib/components/dashboard/Nav.svelte';
	import Cards from '$lib/components/dashboard/Cards.svelte';
	import Controls from '$lib/components/dashboard/Controls.svelte';
	import AlignJustifyIcon from '@lucide/svelte/icons/align-justify';
	import MobileNav from '$lib/components/dashboard/MobileNav.svelte';
	import Pagination from '$lib/components/dashboard/Pagination.svelte';
	import CardFilters from '$lib/components/dashboard/CardFilters.svelte';
	import CategoryCard from '$lib/components/dashboard/CategoryCard.svelte';
	import TagFilterCard from '$lib/components/dashboard/TagFilterCard.svelte';
	import GroupGraphicCard from '$lib/components/dashboard/GroupGraphicCard.svelte';
</script>

<Head
	page_title="SmallFeedBack | Dashboard"
	description="View all feedback posts on your SmallFeedBack boards in one place. Track ideas, read opinions, and engage with anonymous community insights."
	keywords="feedback dashboard, view feedback posts, anonymous feedback list, feedback board manager, track community opinions, board insights"
/>

<div class="min-h-full">
	<header class="pt-10 pb-5.5 lg:py-0">
		<div
			aria-hidden="true"
			class="fixed inset-x-0 -top-40 left-56 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-144 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto w-full px-4 sm:px-6 lg:max-w-350 lg:px-8">
			<div class="relative flex flex-wrap items-center justify-center lg:justify-between">
				<div class="absolute left-0 shrink-0 py-5 lg:hidden">
					<Logo linkTo="/" label="Go to client dashboard" />
				</div>
				<div class="absolute right-0 shrink-0 lg:hidden">
					<button type="button" aria-label="Open menu" class="cursor-pointer">
						<AlignJustifyIcon class="size-8" />
					</button>
				</div>
			</div>
		</div>
		<MobileNav />
	</header>

	<main class="mt-4 pb-8 lg:mt-0">
		<div class="mx-auto w-full px-4 sm:px-6 lg:max-w-350 lg:px-8">
			<h1 class="sr-only">Feedback Dashboard</h1>
			<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-6">
				<aside class="sticky top-8 order-2 hidden shrink-0 grid-cols-1 gap-4 lg:order-none lg:mt-8 lg:grid">
					<GroupGraphicCard />
					<TagFilterCard />
					<CategoryCard />
					<Controls />
				</aside>
				<div class="order-1 grid grid-cols-1 lg:order-none lg:col-span-3 lg:mt-8">
					<Nav />
					<CardFilters />
					<Cards />
					<Pagination />
				</div>
			</div>
		</div>
	</main>
</div>
