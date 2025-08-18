<script>
	import Logo from '$lib/components/Logo.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import MobileNav from '$lib/components/dashboard/MobileNav.svelte';

	let { toggleNotifications = () => {} } = $props();
	let showMobileMenu = $state(false);

	const toggleMobileMenu = () => (showMobileMenu = !showMobileMenu);
</script>

<header class="pt-10 pb-5.5 lg:py-0">
	<div
		aria-hidden="true"
		class="fixed inset-x-0 -top-40 left-56 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	>
		<div
			class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-144 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto w-full px-4 sm:px-6 lg:max-w-350 lg:px-8">
		<div class="relative flex flex-wrap items-center justify-center lg:justify-between">
			<div class="absolute left-0 shrink-0 py-5 lg:hidden">
				<Logo linkTo="/" label="Go to client dashboard" />
			</div>
			<div class="absolute right-0 shrink-0 lg:hidden">
				<button type="button" onclick={toggleMobileMenu} aria-label="Open menu" class="cursor-pointer">
					<MenuIcon class="size-8" />
				</button>
			</div>
		</div>
	</div>
	{#if showMobileMenu}
		<MobileNav {toggleNotifications} {toggleMobileMenu} />
	{/if}
</header>
