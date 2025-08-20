<script>
	import ReplyIcon from '@lucide/svelte/icons/reply';
	import Trash2Icon from '@lucide/svelte/icons/trash-2';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
</script>

<ToggleGroup.Root type="multiple">
	<ToggleGroup.Item aria-label="reply" class="cursor-pointer text-xs sm:opacity-0 sm:group-hover:opacity-100">
		<ReplyIcon class="size-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item
		aria-label="Edit reply"
		class="cursor-pointer text-xs sm:opacity-0 sm:group-hover:opacity-100"
	>
		<SquarePenIcon class="size-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item
		aria-label="Delete reply"
		class="cursor-pointer text-xs sm:opacity-0 sm:group-hover:opacity-100"
	>
		<Trash2Icon class="size-4" />
	</ToggleGroup.Item>
</ToggleGroup.Root>
