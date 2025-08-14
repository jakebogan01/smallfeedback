<script>
	import { page } from '$app/state';
	import { SIGNIN } from '$lib/constants.js';

	let { children } = $props();
</script>

<div class="flex min-h-full">
	<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<img
					src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
					alt="Company logo"
					width="176"
					height="150"
					class="h-10 w-auto"
				/>
				<h2 class="mt-4 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
					{#if page.url.pathname.endsWith(SIGNIN)}
						Sign in to your account
					{:else}
						Create an account
					{/if}
				</h2>
			</div>

			<div class="mt-10">
				{@render children?.()}
			</div>
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			src="https://www.shadcn-svelte.com/placeholder.svg"
			alt=""
			width="1200"
			height="1200"
			class="absolute inset-0 size-full object-cover"
		/>
	</div>
</div>
