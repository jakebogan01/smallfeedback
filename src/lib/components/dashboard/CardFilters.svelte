<script>
	import SearchIcon from '@lucide/svelte/icons/search';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import MessageCircleMoreIcon from '@lucide/svelte/icons/message-circle-more';
</script>

<div class="mt-7 flex justify-between">
	<button
		type="button"
		aria-label="Search"
		class="card-foundation group flex w-9 cursor-pointer items-center space-x-1.5 overflow-hidden py-2 pr-2 pl-2.5 will-change-transform sm:transition-[width] sm:hover:w-26"
	>
		<SearchIcon class="size-4 min-w-4" />
		<span class="text-sm opacity-0 sm:transition-opacity sm:group-hover:opacity-100">Search...</span>
	</button>
	<ToggleGroup.Root type="multiple" class="divide-x">
		<ToggleGroup.Item aria-label="Toggle by likes" class="cursor-pointer bg-background">
			<ThumbsUpIcon class="size-4" />
		</ToggleGroup.Item>
		<ToggleGroup.Item aria-label="Toggle by most comments" class="cursor-pointer bg-background">
			<MessageCircleMoreIcon class="size-4" />
		</ToggleGroup.Item>
		<ToggleGroup.Item aria-label="Toggle by popularity" class="cursor-pointer bg-background">
			<ChevronDownIcon class="size-5" />
		</ToggleGroup.Item>
	</ToggleGroup.Root>
</div>
