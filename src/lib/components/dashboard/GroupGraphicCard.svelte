<script>
	import { faker } from '@faker-js/faker';
</script>

<section aria-labelledby="group-graphic-card-title">
	<div
		class="card-foundation relative bg-cover bg-center bg-no-repeat px-6 pt-16 pb-9"
		style="background-image: url('https://www.shadcn-svelte.com/placeholder.svg');"
	>
		<h1 id="group-graphic-card-title" class="truncate text-xl leading-tight font-bold">
			{faker.company.name()}
		</h1>
		<span class="text-sm">Feedback Overview</span>
	</div>
</section>
