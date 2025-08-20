<script>
	import { page } from '$app/state';
	import { SIGNIN } from '$lib/constants.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';

	let { children } = $props();
</script>

<div class="flex min-h-full">
	<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<Button href="/" variant="ghost" class="flex-inline h-auto cursor-pointer items-center !p-0 text-xs">
					<ChevronLeftIcon class="size-3.5" />
					Back
				</Button>
				<h2 class="mt-2 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
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
	<div class="relative hidden w-0 flex-1 bg-black lg:block">
		<iframe
			src="https://my.spline.design/3dprojectionnoisedemoscopy-zuWBQWq584XyMXJkGS0fgreX-6A9/"
			title="Smallfeedback animation logo"
			frameborder="0"
			width="100%"
			height="100%"
			class="absolute inset-0 size-full object-cover"
			loading="eager"
		></iframe>
		<div class="absolute right-0 bottom-0 h-[15%] w-full bg-black"></div>
		<!--		<img-->
		<!--			src="https://www.shadcn-svelte.com/placeholder.svg"-->
		<!--			alt=""-->
		<!--			width="1200"-->
		<!--			height="1200"-->
		<!--			class="absolute inset-0 size-full object-cover brightness-[0.5] grayscale"-->
		<!--		/>-->
	</div>
</div>
