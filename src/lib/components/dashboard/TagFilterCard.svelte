<script>
	import { faker } from '@faker-js/faker';
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ y: 50, duration: 500 }}
	aria-labelledby="tag-title"
>
	<h3 id="tag-title" class="sr-only">Tags</h3>
	<div class="card-foundation flex flex-wrap justify-evenly gap-x-2 gap-y-3.5 p-6">
		{#each { length: faker.number.int({ min: 1, max: 10 }) }, i (i)}
			<Button type="button" variant="secondary" aria-label={faker.word.sample()} class="cursor-pointer">
				{faker.word.sample()}
			</Button>
		{/each}
		<!--<p class="text-xs/5">No tags found</p>-->
	</div>
</section>
