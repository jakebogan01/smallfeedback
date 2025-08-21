<script>
	import '../app.css';
	import pb from '$lib/pocketbase.js';
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import { BProgress } from '@bprogress/core';
	import favicon from '$lib/assets/logo.png';
	import { USER } from '$lib/stores/user.svelte.js';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	USER.isAuthed = pb.authStore.isValid;

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
