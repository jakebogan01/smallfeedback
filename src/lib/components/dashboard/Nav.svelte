<script>
	import { faker } from '@faker-js/faker';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import { Button } from '$lib/components/ui/button/index.js';
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';

	let { toggleLayout = $bindable() } = $props();
</script>

<nav aria-labelledby="feedback-overview-title">
	<div class="card-foundation bg-primary p-6">
		<h2 id="feedback-overview-title" class="sr-only">Feedback Overview</h2>
		<div class="md:flex md:items-center md:justify-between md:space-x-5">
			<h1 class="flex items-center space-x-3 text-xl font-bold text-white">
				<LayersIcon class="size-6" />
				<span>{faker.number.int({ min: 1, max: 24 })} Task</span>
			</h1>
			<div
				class="mt-4 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"
			>
				<Button
					type="button"
					onclick={() => {
						toggleLayout = !toggleLayout;
					}}
					aria-label="Toggle layouts"
					class="hidden size-10 cursor-pointer bg-background text-primary md:flex"
				>
					<LayoutGridIcon
						fill="primary"
						class="size-6 !transition-transform {toggleLayout ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}"
					/>
					<svg
						fill="primary"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						class="absolute size-6 !transition-transform {toggleLayout
							? 'scale-100 rotate-0'
							: 'scale-0 rotate-90'}"
						viewBox="0 0 52 52"
						enable-background="new 0 0 52 52"
						xml:space="preserve"
						stroke="primary"
						stroke-width="5.2"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<path
								d="M46.5,14h-41C4.7,14,4,13.3,4,12.5v-3C4,8.7,4.7,8,5.5,8h41C47.3,8,48,8.7,48,9.5v3C48,13.3,47.3,14,46.5,14 z"
							></path>
							<path
								d="M46.5,28.9h-41c-0.8,0-1.5-0.7-1.5-1.5v-3C4,23.7,4.7,23,5.5,23h41c0.8,0,1.5,0.7,1.5,1.5v3 C48,28.2,47.3,28.9,46.5,28.9z"
							></path>
							<path
								d="M46.5,44h-41C4.7,44,4,43.3,4,42.5v-3C4,38.7,4.7,38,5.5,38h41c0.8,0,1.5,0.7,1.5,1.5v3 C48,43.3,47.3,44,46.5,44z"
							></path>
						</g></svg
					>
				</Button>
				<Button
					type="button"
					aria-label="Add your feedback"
					class="cursor-pointer bg-background py-5 text-sm font-bold text-black">Add Feedback</Button
				>
			</div>
		</div>
	</div>
</nav>
