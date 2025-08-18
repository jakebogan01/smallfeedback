<script>
	import { faker } from '@faker-js/faker';
	import * as Command from '$lib/components/ui/command/index.js';

	let { open = $bindable() } = $props();

	const handleKeydown = (e) => {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	};
</script>

<svelte:document onkeydown={handleKeydown} />

<Command.Dialog bind:open>
	<Command.Input
		placeholder="Search suggestions"
		class="border-none ring-0 outline-none focus:border-none focus:ring-0 focus:outline-none"
	/>
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			{#each { length: faker.number.int({ min: 1, max: 5 }) }, i (i)}
				<Command.Item class="truncate !p-0">
					<a href="/" class="block w-full px-2 py-3">{faker.book.title()}</a>
				</Command.Item>
			{/each}
		</Command.Group>
		<Command.Separator />
	</Command.List>
</Command.Dialog>
