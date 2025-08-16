<script>
	import { faker } from '@faker-js/faker';
	import { DASHBOARD } from '$lib/constants.js';
	import HashTag from '@lucide/svelte/icons/hash';
	import HearIcon from '@lucide/svelte/icons/heart';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import { toISODate, timeAgo } from '$lib/utils/date.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import MessageCircleMoreIcon from '@lucide/svelte/icons/message-circle-more';

	let { toggleLayout } = $props();
</script>

<section class="mt-3" id="feedback-cards">
	<ul
		role="list"
		class="space-y-3 rounded-md bg-background/30 sm:p-4 {toggleLayout
			? 'grid-cols-1 grid-cols-2 gap-4 sm:grid xl:grid-cols-3'
			: 'block'}"
	>
		{#each { length: faker.number.int({ min: 1, max: 10 }) }, i (i)}
			{#if toggleLayout}
				<li class="card-foundation">
					<a href="{DASHBOARD}/post/title" class="flex flex-col" aria-label="View Feedback title">
						<div class="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6">
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
								<span class="font-medium sm:text-sm/6">{faker.number.int({ min: 0, max: 100 })}</span>
							</Button>
							<div class="flex items-center space-x-3">
								<span class="my-1 flex items-center md:my-0">
									<HashTag class="size-3" />
									<span class="ml-0.5 text-xs leading-none">{faker.book.genre()}</span>
								</span>
								<div class="ml-0 flex items-center">
									<MessageCircleMoreIcon class="size-3" />
									<span class="ml-0.5 text-xs leading-none">{faker.number.int({ min: 0, max: 50 })}</span>
								</div>
							</div>
						</div>
						<div class="flex-1 px-4 py-2 sm:px-6">
							<div class="flex items-center justify-between">
								<div class="flex flex-col items-start md:flex-row md:items-center">
									<h2 class="max-w-60 truncate font-semibold sm:max-w-md">{faker.book.title()}</h2>
								</div>
							</div>
							<p class="mt-1 mb-4 line-clamp-3">{faker.word.words({ count: { min: 20, max: 100 } })}</p>
						</div>
					</a>
				</li>
			{:else}
				<li class="card-foundation">
					<a href="{DASHBOARD}/post/title" class="flex flex-col md:flex-row" aria-label="View Feedback title">
						<div class="mr-5 px-4 pt-4 sm:pt-6 sm:pb-6 sm:pl-8">
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
						</div>
						<div class="flex-1 px-4 py-2 sm:pt-6 sm:pr-8 sm:pl-8 md:pl-0">
							<div class="flex items-center justify-between">
								<div class="flex flex-col items-start space-x-3 md:flex-row md:items-center">
									<h2 class="max-w-60 truncate font-semibold sm:max-w-md">{faker.book.title()}</h2>
									<span class="my-1 flex items-center md:my-0">
										<HashTag class="size-3" />
										<span class="ml-0.5 text-xs leading-none">{faker.book.genre()}</span>
									</span>
								</div>
								<div class="hidden items-center space-x-3 xl:flex">
									<div class="ml-0 flex items-center">
										<MessageCircleMoreIcon class="size-3" />
										<span class="ml-0.5 text-xs leading-none">{faker.number.int({ min: 0, max: 50 })}</span>
									</div>
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
							<p class="mt-2 mb-4 line-clamp-3">
								{faker.word.words({ count: { min: 20, max: 9999 } }).toLocaleString('en-US')}
							</p>
						</div>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</section>
