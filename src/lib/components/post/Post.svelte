<script>
	import { faker } from '@faker-js/faker';
	import { DASHBOARD } from '$lib/constants.js';
	import HashIcon from '@lucide/svelte/icons/hash';
	import InfoIcon from '@lucide/svelte/icons/info';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import LikeButton from '$lib/components/LikeButton.svelte';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
</script>

<section aria-labelledby="suggestion-title">
	<h3 id="suggestion-title" class="sr-only">Suggestion card</h3>
	<div class="card-foundation px-3 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-6">
		<div class="flex">
			<a href={DASHBOARD} aria-label="Go to Dashboard" class="flex items-center text-xs">
				<ChevronLeftIcon class="size-3.5" />
				Dashboard
			</a>
		</div>
		<div class="mt-4">
			<div>
				<div
					class="flex items-center justify-end rounded-md bg-primary py-6 pr-5 text-4xl font-bold text-white"
				>
					<span>{faker.person.firstName()}</span>
					<!--                    <Skeleton class="h-10 w-1/2 rounded bg-white/30" />-->
				</div>
				<div class="-mt-12 flow-root px-4">
					<div class="-m-1 flex">
						<div
							class="inline-flex overflow-hidden rounded-md border-4 border-white bg-background shadow-md dark:shadow-none"
						>
							<img
								class="size-24 shrink-0 bg-white"
								width="96"
								height="96"
								src={faker.image.avatar()}
								alt={faker.person.firstName()}
							/>
							<!--                            <Skeleton class="size-24 rounded bg-black/30" />-->
						</div>
					</div>
					<div class="mt-6 flex items-center">
						<div class="inline-flex w-full flex-1">
							<h2 id="view-task-title" class="text-xl font-bold capitalize">
								{faker.book.title()}
							</h2>
							<!--                            <Skeleton class="h-7 w-1/2 rounded bg-black/30" />-->
						</div>
						<LikeButton />
						<!--                        <Skeleton class="h-9 w-20 rounded bg-black/30" />-->
					</div>
				</div>
			</div>
			<div class="mt-5 px-4 text-left">
				<dl class="space-y-8">
					<dd class="text-sm leading-relaxed">
						{faker.word.words({ count: { min: 20, max: 100 } })}
						<!--                        <Skeleton class="mt-4 h-6 w-full rounded bg-black/30" />-->
						<!--                        <Skeleton class="mt-2 h-6 w-full rounded bg-black/30" />-->
						<!--                        <Skeleton class="mt-2 h-6 w-full rounded bg-black/30" />-->
					</dd>
					<div class="lg:col-start-3 lg:row-end-1">
						<h2 class="sr-only">Post Information</h2>
						<div class="rounded-md bg-gray-200">
							<dl class="flex items-center justify-center px-2 py-6">
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Category</span>
										<HashIcon class="size-5" />
									</dt>
									<dd class="text-sm/6">
										<span>Bug</span>
										<!--                                        <Skeleton class="h-5 w-10 rounded bg-black/30" />-->
									</dd>
								</div>
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Status</span>
										<InfoIcon class="size-5" />
									</dt>
									<dd class="text-sm/6">
										<span>Requested</span>
										<!--                                        <Skeleton class="h-5 w-10 rounded bg-black/30" />-->
									</dd>
								</div>
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Due date</span>
										<CalendarIcon class="size-5" />
									</dt>
									<dd class="text-sm/6">
										<time datetime="2023-01-31">Jan 23</time>
										<!--                                        <Skeleton class="h-5 w-10 rounded bg-black/30" />-->
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
