<script>
	import Header from '$lib/components/dashboard/Header.svelte';

	let { children } = $props();
</script>

<div class="min-h-full">
	<Header />
	{@render children?.()}
</div>
