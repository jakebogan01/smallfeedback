<script>
	import { faker } from '@faker-js/faker';
	import HearIcon from '@lucide/svelte/icons/heart';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button
	type="button"
	onclickcapture={(e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log('like post!');
	}}
	aria-label="Like this post"
    variant="secondary"
	class="cursor-pointer"
>
	<HearIcon class="size-4" />
	<span class="font-medium sm:text-sm/6"
		>{faker.number.int({ min: 0, max: 9999 }).toLocaleString('en-US')}</span
	>
</Button>
