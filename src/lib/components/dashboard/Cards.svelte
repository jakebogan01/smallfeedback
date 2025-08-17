<script>
	import { faker } from '@faker-js/faker';
	import { DASHBOARD } from '$lib/constants.js';
	import HashTag from '@lucide/svelte/icons/hash';
	import HearIcon from '@lucide/svelte/icons/heart';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import { toISODate, timeAgo } from '$lib/utils/date.js';
	import { Button } from '$lib/components/ui/button/index.js';
	// import { Skeleton } from "$lib/components/ui/skeleton/index.js";
	import MessageCircleMoreIcon from '@lucide/svelte/icons/message-circle-more';

	let { changeLayout } = $props();
</script>

<section class="mt-3" id="feedback-cards">
	<ul
		role="list"
		class="grid space-y-3 rounded-md bg-background/30 sm:p-4 {changeLayout
			? 'grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'
			: 'grid-cols-1'}"
	>
		{#each { length: faker.number.int({ min: 1, max: 10 }) }, i (i)}
			{@const link = `${DASHBOARD}/post/title`}
			{#if changeLayout}
				<li class="card-foundation">
					<a href={link} class="flex flex-col" aria-label="View Feedback title">
						<div class="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6">
							{@render likeBtn()}
							<div class="flex items-center space-x-3">
								{@render tag()}
								{@render commentCount()}
							</div>
						</div>
						<div class="flex-1 px-4 py-2 sm:px-6">
							<div class="flex items-center justify-between">
								<div class="flex flex-col items-start md:flex-row md:items-center">
									{@render title()}
								</div>
							</div>
							{@render copy('mt-1')}
						</div>
					</a>
				</li>
			{:else}
				<li class="card-foundation">
					<a href={link} class="flex flex-col md:flex-row" aria-label="View Feedback title">
						<div class="mr-5 px-4 pt-4 sm:pt-6 sm:pb-6 sm:pl-8">
							{@render likeBtn()}
						</div>
						<div class="flex-1 px-4 py-2 sm:pt-6 sm:pr-8 sm:pl-8 md:pl-0">
							<div class="flex items-center justify-between">
								<div class="flex flex-col items-start space-x-3 md:flex-row md:items-center">
									{@render title()}
									{@render tag()}
								</div>
								<div class="hidden items-center space-x-3 xl:flex">
									{@render commentCount()}
									<div class="flex items-center">
										<HistoryIcon class="size-3" />
										<time
											class="ml-0.5 text-xs leading-none"
											datetime={toISODate(faker.date.anytime())}
											aria-label="Created on {toISODate(faker.date.anytime())}"
											>{timeAgo(faker.date.anytime())}</time
										>
									</div>
								</div>
							</div>
							{@render copy('mt-2')}
						</div>
					</a>
				</li>
			{/if}
		{/each}
		<!--{#each { length: 10 }, i (i)}-->
		<!--    <li class="card-foundation">-->
		<!--        <div class="flex flex-col md:flex-row" aria-label="View Feedback title">-->
		<!--            <div class="mr-5 px-4 pt-4 sm:pt-6 sm:pb-6 sm:pl-8">-->
		<!--                <Skeleton class="h-9 w-20 rounded bg-black/30" />-->
		<!--            </div>-->
		<!--            <div class="relative flex-1 px-4 py-2 sm:pt-6 sm:pr-8 sm:pl-8 md:pl-0">-->
		<!--                <div class="flex items-center justify-between">-->
		<!--                    <div class="flex flex-col items-start space-x-3 md:flex-row md:items-center">-->
		<!--                        <Skeleton class="h-6 w-50 rounded bg-black/30" />-->
		<!--                    </div>-->
		<!--                </div>-->
		<!--                <Skeleton class="mt-4 h-6 w-full rounded bg-black/30" />-->
		<!--                <Skeleton class="mt-2 h-6 w-full rounded bg-black/30" />-->
		<!--            </div>-->
		<!--        </div>-->
		<!--    </li>-->
		<!--{/each}-->
	</ul>
</section>

{#snippet likeBtn()}
	<Button
		type="button"
		onclickcapture={(e) => {
			e.stopPropagation();
			e.preventDefault();
			console.log('like post!');
		}}
		aria-label="Like this post"
		class="cursor-pointer"
	>
		<HearIcon class="size-4" />
		<span class="font-medium sm:text-sm/6"
			>{faker.number.int({ min: 0, max: 9999 }).toLocaleString('en-US')}</span
		>
	</Button>
{/snippet}

{#snippet tag()}
	<span class="my-1 flex items-center md:my-0">
		<HashTag class="size-3" />
		<span class="ml-0.5 text-xs leading-none">{faker.book.genre()}</span>
	</span>
{/snippet}

{#snippet commentCount()}
	<div class="ml-0 flex items-center">
		<MessageCircleMoreIcon class="size-3" />
		<span class="ml-0.5 text-xs leading-none">{faker.number.int({ min: 0, max: 50 })}</span>
	</div>
{/snippet}

{#snippet title()}
	<h2 class="max-w-60 truncate font-semibold sm:max-w-md">{faker.book.title()}</h2>
{/snippet}

{#snippet copy(mt)}
	<p class="{mt} mb-4 line-clamp-3">{faker.word.words({ count: { min: 20, max: 100 } })}</p>
{/snippet}
