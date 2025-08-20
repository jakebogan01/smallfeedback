<script>
	import { faker } from '@faker-js/faker';
	import ButtonGroup from '$lib/components/post/ButtonGroup.svelte';

	let { class: className } = $props();
</script>

<div class="group flex flex-row {className}">
	<img
		class="mt-1 inline-block size-7 rounded-full"
		src={faker.image.avatar()}
		alt={faker.person.fullName()}
	/>
	<div class="mt-1 flex-1">
		<div class="flex flex-1 items-start justify-between px-4">
			<div>
				<h4 class="-mb-2 text-sm font-bold">{faker.person.firstName()}</h4>
				<span class="text-xs">5 weeks ago</span>
			</div>
			<div class="flex items-center space-x-2">
				<ButtonGroup />
			</div>
		</div>
		<div class="mt-1 ml-2 flex-1 px-2 text-sm leading-relaxed">
			<p>{faker.word.words({ count: { min: 5, max: 40 } })}</p>
		</div>
	</div>
</div>
