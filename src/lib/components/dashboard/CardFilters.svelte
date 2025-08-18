<script>
	import { Kbd } from '$lib/components/ui/kbd';
	import { isMac } from '$lib/hooks/is-mac.svelte.js';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { cmdOrCtrl, optionOrAlt } from '$lib/hooks/is-mac.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import MessageCircleMoreIcon from '@lucide/svelte/icons/message-circle-more';

	let { open = $bindable() } = $props();
</script>

<div class="mt-7 flex justify-between">
	<button
		type="button"
		onclick={() => (open = !open)}
		aria-label="Search"
		class="card-foundation flex cursor-pointer items-center space-x-1.5 overflow-hidden py-2 pr-2 pl-2.5"
	>
		<SearchIcon class="size-4 min-w-4" />
		<span class="text-sm text-muted-foreground">
			{@render pcType()}
		</span>
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

{#snippet pcType()}
	<span class="sr-only">{isMac ? 'Command/Ctrl' : 'Option/Alt'}</span>
	<Kbd
		class="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none"
	>
		<span class="text-xs">{isMac ? cmdOrCtrl : optionOrAlt}</span>
		<span class="mb-0.5">K</span>
	</Kbd>
{/snippet}
