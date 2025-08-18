<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { BProgress } from '@bprogress/core';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from 'svelte-5-french-toast';
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

<Toaster />

{@render children?.()}
