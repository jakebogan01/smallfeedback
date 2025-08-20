<script>
	import { faker } from '@faker-js/faker';
	import Comment from '$lib/components/post/Comment.svelte';
</script>

<section id="comment-section" class="card-foundation space-y-5 p-2 sm:p-6 lg:max-w-2xl">
	<div class="border border-b-input pb-6 last:border-b last:border-transparent">
		<Comment />
		<hr class="my-2 border-0 border-transparent" />
		{#each { length: faker.number.int({ min: 1, max: 10 }) }, i (i)}
			<Comment class="mt-2 ml-12" />
		{/each}
	</div>
</section>
