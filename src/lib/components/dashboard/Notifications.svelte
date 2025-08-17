<script>
	import { faker } from '@faker-js/faker';
</script>

<div
	aria-live="assertive"
	class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
>
	<ul role="list" class="flex w-full flex-col items-center space-y-4 sm:items-end">
		{#each { length: faker.number.int({ min: 1, max: 5 }) }, i (i)}
			<li class="pointer-events-auto flex w-full max-w-md rounded-md bg-background shadow-lg">
				<div class="w-0 flex-1 p-4">
					<div class="flex items-center">
						<div class="shrink-0 pt-0.5">
							<img
								src={faker.image.avatar()}
								alt={faker.person.fullName()}
								width="40"
								height="40"
								class="size-10 rounded-full bg-white"
							/>
						</div>
						<div class="ml-3 flex-1 text-sm">
							<p class="font-semibold">{faker.person.fullName()}</p>
							<p>Commented on your <a href="/" class="font-medium underline">post</a></p>
						</div>
					</div>
				</div>
				<div class="flex border-l">
					<button
						type="button"
						class="flex w-full items-center justify-center rounded-none rounded-r-md p-4 text-sm font-medium"
						>View</button
					>
				</div>
			</li>
		{/each}
	</ul>
</div>
