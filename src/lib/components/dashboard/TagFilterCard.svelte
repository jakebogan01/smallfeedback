<script>
	import { faker } from '@faker-js/faker';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section aria-labelledby="tag-title">
	<h3 id="tag-title" class="sr-only">Tags</h3>
	<div class="card-foundation flex flex-wrap justify-evenly gap-x-2 gap-y-3.5 p-6">
		{#each { length: faker.number.int({ min: 1, max: 10 }) }, i (i)}
			<Button type="button" aria-label={faker.word.sample()} class="cursor-pointer">
				{faker.word.sample()}
			</Button>
		{/each}
		<!--<p class="text-xs/5">No tags found</p>-->
	</div>
</section>
