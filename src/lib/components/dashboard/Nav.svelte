<script>
	import { faker } from '@faker-js/faker';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import { Button } from '$lib/components/ui/button/index.js';
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
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
					aria-label="Toggle layouts"
					class="size-10 cursor-pointer bg-background text-primary"
				>
					<LayoutGridIcon fill="primary" class="size-6" />
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
