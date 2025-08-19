<script>
	import { Kbd } from '$lib/components/ui/kbd';
	import { isMac } from '$lib/hooks/is-mac.svelte.js';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { cmdOrCtrl, optionOrAlt } from '$lib/hooks/is-mac.svelte';
	import AlignJustifyIcon from '@lucide/svelte/icons/align-justify';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import MessageCircleMoreIcon from '@lucide/svelte/icons/message-circle-more';

	let { toggleLayout = () => {}, open = $bindable(), changeLayout } = $props();
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

	<div class="flex items-center space-x-2">
		<ToggleGroup.Root type="multiple" class="divide-x">
			<ToggleGroup.Item
				onclick={toggleLayout}
				aria-label="Toggle layout"
				class="cursor-pointer bg-background"
			>
				<LayoutGridIcon
					class="size-4 !transition-transform {changeLayout ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}"
				/>
				<AlignJustifyIcon
					class="absolute size-4 !transition-transform {changeLayout
						? 'scale-100 rotate-0'
						: 'scale-0 rotate-90'}"
				/>
			</ToggleGroup.Item>
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
