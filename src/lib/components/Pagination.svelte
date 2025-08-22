<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
</script>

<nav aria-label="Pagination" class="mt-3">
	<div class="flex justify-between">
		<Button type="button" aria-label="Previous page" variant="outline" class="size-11 cursor-pointer">
			<ChevronLeftIcon class="size-6" />
		</Button>
		<Button type="button" aria-label="Next page" variant="outline" class="size-11 cursor-pointer">
			<ChevronRightIcon class="size-6" />
		</Button>
	</div>
</nav>
