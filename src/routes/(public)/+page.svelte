<script>
	import pb from '$lib/pocketbase.js';
	import { SIGNIN } from '$lib/constants.js';
	import { logout } from '$lib/utils/logout.js';
	import Head from '$lib/components/Head.svelte';
	import AlignJustifyIcon from '@lucide/svelte/icons/align-justify';
	import { onMount } from 'svelte';

	let openMenu = $state(false);

	onMount(() => {
		const canvas = document.getElementById('overlay');
		const ctx = canvas.getContext('2d');
		const target = document.getElementById('target');

		const updateCanvasSize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		// Handle window resize
		window.addEventListener('resize', updateCanvasSize);
		updateCanvasSize();

		// Mouse position
		let mouse = { x: null, y: null };
		window.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		});

		// Draw arrow function
		const drawArrow = () => {
			const x0 = mouse.x;
			const y0 = mouse.y;

			if (!x0 || !y0) return;

			// Get target center
			const rect = target.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;

			// Add target size
			const a = Math.atan2(cy - y0, cx - x0);
			const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
			const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

			const midX = (x0 + x1) / 2;
			const midY = (y0 + y1) / 2;
			const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
			const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
			const controlX = midX;
			const controlY = midY + offset * t;

			const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
			const opacity = Math.min(0.75, (r - Math.max(rect.width, rect.height) / 2) / 750);

			ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
			ctx.lineWidth = 1;

			// Draw curve
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x0, y0);
			ctx.quadraticCurveTo(controlX, controlY, x1, y1);
			ctx.setLineDash([10, 4]);
			ctx.stroke();
			ctx.restore();

			// Draw arrowhead
			const angle = Math.atan2(y1 - controlY, x1 - controlX);
			const headLength = 10;
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(
				x1 - headLength * Math.cos(angle - Math.PI / 6),
				y1 - headLength * Math.sin(angle - Math.PI / 6)
			);
			ctx.moveTo(x1, y1);
			ctx.lineTo(
				x1 - headLength * Math.cos(angle + Math.PI / 6),
				y1 - headLength * Math.sin(angle + Math.PI / 6)
			);
			ctx.stroke();
		};

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			drawArrow();

			requestAnimationFrame(animate);
		};

		animate();
	});
</script>

<Head
	page_title="SmallFeedBack | Home"
	description="SmallFeedBack is the anonymous feedback platform where you can create boards, gather opinions, and spark meaningful discussions on any topic."
	keywords="anonymous feedback platform, create feedback board, share opinions online, discussion board platform, topic feedback website, gather anonymous feedback"
/>

<header
	class="fixed top-0 left-0 z-4 w-full bg-white shadow lg:static lg:bg-transparent lg:px-6 lg:py-7.5 lg:shadow-none"
>
	<div class="mx-auto max-w-7xl text-[#1f4568]">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-between">
				<div class="flex items-center px-5 py-3 lg:p-0">
					<img src="https://image.ibb.co/kcVou6/path3000.png" alt="Logo" width="24" height="28" />
					<h1 class="ml-2.5 text-lg leading-[1.125rem]">SmallFeedBack</h1>
				</div>
				<button
					type="button"
					onclick={() => (openMenu = !openMenu)}
					class="relative float-right mr-2.5 cursor-pointer rounded-sm border border-transparent bg-transparent px-2.5 py-[0.5625rem] lg:hidden"
				>
					<span class="sr-only">Toggle navigation</span>
					<AlignJustifyIcon class="size-5.5" />
				</button>
			</div>
			<nav id="navbar" class="">
				<ul class="">
					<li>
						<a
							href={SIGNIN}
							aria-label="Sign-in"
							class="w-30 rounded-full border border-[#c9d9e9] bg-transparent px-6 py-3 text-xs font-normal text-slate-500 select-none sm:text-sm"
							>Sign in</a
						>
					</li>
				</ul>
			</nav>
		</div>
		{#if openMenu}
			<div class="float-right inline-block w-full align-middle lg:hidden">
				<nav>
					<ul>
						{#if pb?.authStore?.isValid}
							<li class="border border-[#ededed] bg-blue-500">
								<button
									onclick={logout}
									aria-label="Sign out"
									class="block w-full cursor-pointer px-5 py-2.5 text-sm font-normal text-white select-none"
									>Sign out</button
								>
							</li>
						{:else}
							<li class="border border-[#ededed] bg-blue-500">
								<a
									href={SIGNIN}
									aria-label="Sign-in"
									class="block w-full px-5 py-2.5 text-sm font-normal text-white select-none">Sign in</a
								>
							</li>
						{/if}
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</header>

<main class="flex h-full flex-col">
	<section
		id="hero"
		class="relative mx-auto max-w-3xl py-22.5 text-[#1f4568] xl:max-w-6xl xl:pt-22.5 xl:pb-75"
	>
		<div class="mx-4">
			<div class="-mx-4">
				<div class="relative min-h-px px-4">
					<div class="text-center">
						<h1 class="text-2xl font-bold sm:text-3xl xl:text-5xl">Fast paced way to grow your business</h1>
						<h2 class="mt-0 mb-6 text-lg font-medium text-[#8198ae] sm:mt-4 sm:mb-10 sm:text-xl">
							Manage analytics like a boss
						</h2>
						<div>
							<a
								href={SIGNIN}
								aria-label="Sign-in"
								id="target"
								class="w-30 rounded-full bg-blue-500 px-6 py-3 text-xs font-normal text-white shadow-lg shadow-black/30 select-none sm:text-sm sm:shadow-xl sm:transition-shadow sm:hover:shadow-xs"
								>Get Started</a
							>
						</div>
						<img
							src="https://image.ibb.co/c7grYb/image3015.png"
							alt="Dashboard"
							width=""
							height=""
							class="mt-8 inline-block w-full align-middle sm:mt-15 md:w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="relative flex-1 bg-indigo-500/90 pt-15 pb-10 sm:py-22.5">
		<img
			src="https://image.ibb.co/fWyVtb/path3762.png"
			alt="Blocks"
			width=""
			height=""
			class="absolute bottom-0 left-[20%] z-0 w-[65%] max-w-5xl align-middle xl:left-[27%]"
		/>
		<div class="mx-auto max-w-4xl px-4">
			<div class="-mx-4">
				<div class="relative min-h-px px-4 text-center">
					<h3 class="mb-2.5 text-lg leading-tight font-medium text-white sm:mt-5 sm:text-[1.75rem]">
						Oh! Your have digged our website in search for the new job?
					</h3>
					<h4 class="mb-7.5 text-sm leading-tight font-medium text-[#c7cbff] sm:text-[1.375rem]">
						We will pleased to have you onboard! Check open positions.
					</h4>
					<a
						href={SIGNIN}
						aria-label="Sign-in"
						class="w-30 rounded-full bg-white px-6 py-3 text-xs font-normal text-slate-500 shadow-lg shadow-black/30 select-none sm:text-sm sm:shadow-xl sm:transition-shadow sm:hover:shadow-xs"
						>Get Started</a
					>
				</div>
			</div>
		</div>
	</footer>
</main>

<canvas id="overlay" class="pointer-events-none fixed inset-0"></canvas>
