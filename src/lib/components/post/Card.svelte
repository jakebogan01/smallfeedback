<script>
	import { faker } from '@faker-js/faker';
	import { DASHBOARD } from '$lib/constants.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import LikeButton from '$lib/components/LikeButton.svelte';
</script>

<section aria-labelledby="suggestion-title" class="overflow-hidden">
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
				</div>
				<div class="-mt-12 flow-root px-4">
					<div class="-m-1 flex">
						<div
							class="inline-flex overflow-hidden rounded-md border-4 border-white shadow-md dark:shadow-none"
						>
							<img
								class="size-24 shrink-0"
								width="96"
								height="96"
								src={faker.image.avatar()}
								alt={faker.person.firstName()}
							/>
						</div>
					</div>
					<div class="mt-6 flex items-center">
						<div class="inline-flex w-full flex-1">
							<h2 id="view-task-title" class="text-xl font-bold capitalize">
								{faker.book.title()}
							</h2>
						</div>
						<LikeButton />
					</div>
				</div>
			</div>
			<div class="mt-5 px-4 text-left">
				<dl class="space-y-8">
					<div>
						<dd class="mt-1 space-y-2 text-sm text-slate-500 dark:text-white/80">
							{faker.word.words({ count: { min: 20, max: 100 } })}
						</dd>
					</div>
					<div class="lg:col-start-3 lg:row-end-1">
						<h2 class="sr-only">Information</h2>
						<div
							class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 dark:bg-white/5 dark:shadow-none"
						>
							<dl class="flex items-center justify-center px-2 py-6">
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Category</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											aria-hidden="true"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-5 text-gray-400 dark:text-white/80"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
											/></svg
										>
									</dt>
									<dd class="text-sm/6 text-gray-500 dark:text-white/80">
										<span>Bug</span>
									</dd>
								</div>
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Status</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-5 text-gray-400 dark:text-white/80"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
											/></svg
										>
									</dt>
									<dd class="text-sm/6 text-gray-500 capitalize dark:text-white/80">
										<span>Requested</span>
									</dd>
								</div>
								<div class="flex w-full flex-col items-center gap-x-2">
									<dt class="flex-none">
										<span class="sr-only">Due date</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											aria-hidden="true"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-5 text-gray-400 dark:text-white/80"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
											/></svg
										>
									</dt>
									<dd class="text-sm/6 text-gray-500 dark:text-white/80">
										<time datetime="2023-01-31">Jan 23</time>
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
