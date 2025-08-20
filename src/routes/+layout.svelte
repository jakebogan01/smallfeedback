<script>
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import { BProgress } from '@bprogress/core';
	import favicon from '$lib/assets/logo.png';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	BProgress.configure({
		showSpinner: false
	});
	beforeNavigate(() => {
		BProgress.start();
	});
	afterNavigate(() => {
		BProgress.done();
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<Toaster closeButton visibleToasts={6} />

{@render children?.()}
