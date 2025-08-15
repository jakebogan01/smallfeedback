<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<div class="hidden">
	<div
		aria-hidden="true"
		class="fixed inset-0 z-20 overflow-hidden bg-slate-400/20 backdrop-blur-sm dark:bg-black/40"
	></div>
	<div class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 sm:transition">
		<div
			id="menu"
			class="dark:bg-dark-secondary rounded-lg bg-white shadow-xl ring-1 ring-slate-900/5 dark:shadow-none"
		>
			<div class="pt-3 pb-2">
				<div class="flex items-center justify-between px-4">
					<Logo linkTo="/" label="Go to client dashboard" />
					<div class="-mr-2">
						<button type="button" aria-label="Open menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-8 text-slate-700 dark:text-white"
								><path
									fill-rule="evenodd"
									d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
									clip-rule="evenodd"
								/></svg
							>
						</button>
					</div>
				</div>
				<div class="mt-4 flex flex-col rounded-2xl p-4 text-lg tracking-tight text-slate-700 dark:text-white">
					<a href="/" aria-label="Show features" title="Show Features" class="p-2">Features</a>
					<a href="/" aria-label="Show benefits" title="Show Benefits" class="p-2">Benefits</a>
					<a href="/" aria-label="Show FAQ" title="Show FAQ" class="p-2">FAQ</a>
					<hr class="dark:border-gray-secondary mx-2 mt-2 mb-6 border-slate-300/40" />
					<a href="/" aria-label="Go to settings" title="Go to Settings" class="mb-2 p-2">Settings</a>
					<form method="POST">
						<button
							type="submit"
							aria-label="Sign out"
							title="Sign Out"
							class="block w-full rounded-md bg-blue-600 p-2 text-left font-medium text-white sm:transition sm:hover:bg-blue-500 dark:bg-emerald-600 sm:dark:hover:bg-emerald-500"
							>Sign out</button
						>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
