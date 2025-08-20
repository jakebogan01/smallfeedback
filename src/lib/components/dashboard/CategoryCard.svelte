<script>
	import { faker } from '@faker-js/faker';
	import { fly } from 'svelte/transition';
</script>

<section
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ y: 50, duration: 500 }}
	aria-labelledby="category-title"
>
	<div class="card-foundation group p-6">
		<h3 id="category-title" class="font-bold">Categories</h3>
		<ul role="list" class="mt-2 space-y-1">
			{#each { length: faker.number.int({ min: 1, max: 5 }) }, i (i)}
				<li class="relative flex items-center gap-x-4">
					<div
						class="size-1.5 rounded-full"
						style="background-color: {faker.color.rgb({ casing: 'upper' })};"
					></div>
					<p class="flex-auto truncate py-0.5 text-sm/6 font-medium">{faker.word.sample()}</p>
					<span class="flex-none py-0.5 text-xs/5">
						{faker.number.int({ min: 1, max: 24 })}
					</span>
				</li>
			{/each}
		</ul>
		<!--<p class="text-center text-xs/5">No categories found</p>-->
	</div>
</section>
