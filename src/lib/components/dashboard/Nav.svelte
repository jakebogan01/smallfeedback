<script>
	import { faker } from '@faker-js/faker';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import { Button } from '$lib/components/ui/button/index.js';

	let { toggleLayout = () => {}, toggleCreateForm = () => {}, changeLayout, showCreateForm } = $props();
</script>

<nav aria-labelledby="feedback-overview-title">
	<div class="card-foundation bg-primary p-6">
		<h2 id="feedback-overview-title" class="sr-only">Feedback Overview</h2>
		<div class="md:flex md:items-center md:justify-between md:space-x-5">
			<h1 class="flex items-center space-x-3 text-xl font-bold text-white">
				<LayersIcon class="size-6" />
				<span>{faker.number.int({ min: 1, max: 24 })} Suggestions</span>
			</h1>
			<div
				class="mt-4 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"
			>
				<Button
					type="button"
					onclick={toggleLayout}
					disabled={showCreateForm}
					aria-label="Toggle layouts"
					class="hidden size-10 cursor-pointer bg-background text-primary md:flex"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						class="size-5 !transition-transform {changeLayout ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}"
						viewBox="0 0 24 24"
						><path
							d="M0,5.406A8.988,8.988,0,0,1,.274,2.225,3.6,3.6,0,0,1,2.225.274,8.988,8.988,0,0,1,5.406,0,8.988,8.988,0,0,1,8.587.274a3.6,3.6,0,0,1,1.951,1.951,8.988,8.988,0,0,1,.274,3.181,8.988,8.988,0,0,1-.274,3.181,3.6,3.6,0,0,1-1.951,1.951,8.988,8.988,0,0,1-3.181.274,8.988,8.988,0,0,1-3.181-.274A3.6,3.6,0,0,1,.274,8.587,8.988,8.988,0,0,1,0,5.406Z"
							fill="primary"
						/><path
							d="M105.874,2.225a8.987,8.987,0,0,0-.274,3.181,8.987,8.987,0,0,0,.274,3.181,3.6,3.6,0,0,0,1.95,1.951,8.989,8.989,0,0,0,3.181.274,8.989,8.989,0,0,0,3.181-.274,3.6,3.6,0,0,0,1.95-1.951,8.987,8.987,0,0,0,.274-3.181,8.987,8.987,0,0,0-.274-3.181,3.6,3.6,0,0,0-1.95-1.951A8.989,8.989,0,0,0,111.006,0a8.989,8.989,0,0,0-3.181.274A3.6,3.6,0,0,0,105.874,2.225Z"
							transform="translate(-92.412)"
							fill="primary"
						/><path
							d="M105.874,107.825a8.988,8.988,0,0,0-.274,3.181,8.988,8.988,0,0,0,.274,3.181,3.6,3.6,0,0,0,1.95,1.95,8.988,8.988,0,0,0,3.181.274,8.988,8.988,0,0,0,3.181-.274,3.6,3.6,0,0,0,1.95-1.95,8.988,8.988,0,0,0,.274-3.181,8.988,8.988,0,0,0-.274-3.181,3.6,3.6,0,0,0-1.95-1.95,8.988,8.988,0,0,0-3.181-.274,8.988,8.988,0,0,0-3.181.274A3.6,3.6,0,0,0,105.874,107.825Z"
							transform="translate(-92.412 -92.412)"
							fill="primary"
						/><path
							d="M.274,107.825A8.989,8.989,0,0,0,0,111.006a8.989,8.989,0,0,0,.274,3.181,3.6,3.6,0,0,0,1.951,1.95,8.987,8.987,0,0,0,3.181.274,8.987,8.987,0,0,0,3.181-.274,3.6,3.6,0,0,0,1.951-1.95,8.989,8.989,0,0,0,.274-3.181,8.989,8.989,0,0,0-.274-3.181,3.6,3.6,0,0,0-1.951-1.95,8.987,8.987,0,0,0-3.181-.274,8.987,8.987,0,0,0-3.181.274A3.6,3.6,0,0,0,.274,107.825Z"
							transform="translate(0 -92.412)"
							fill="primary"
						/></svg
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						class="absolute size-5 !transition-transform {changeLayout
							? 'scale-100 rotate-0'
							: 'scale-0 rotate-90'}"
						viewBox="0 0 24 24"
						><g transform="translate(-7621 -4566)"
							><path
								d="M2,0H22a2,2,0,0,1,2,2V4a2,2,0,0,1-2,2H2A2,2,0,0,1,0,4V2A2,2,0,0,1,2,0Z"
								transform="translate(7621 4566)"
								fill="primary"
							/><path
								d="M2,0H22a2,2,0,0,1,2,2V4a2,2,0,0,1-2,2H2A2,2,0,0,1,0,4V2A2,2,0,0,1,2,0Z"
								transform="translate(7621 4575)"
								fill="primary"
							/><path
								d="M2,0H22a2,2,0,0,1,2,2V4a2,2,0,0,1-2,2H2A2,2,0,0,1,0,4V2A2,2,0,0,1,2,0Z"
								transform="translate(7621 4584)"
								fill="primary"
							/></g
						></svg
					>
				</Button>
				<Button
					type="button"
					onclick={toggleCreateForm}
					disabled={showCreateForm}
					aria-label="Add your feedback"
					class="cursor-pointer bg-background py-5 text-sm font-bold text-black">Add Feedback</Button
				>
			</div>
		</div>
	</div>
</nav>
