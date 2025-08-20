<script>
	import Quill from 'quill';
	import ImageResize from 'quill-image-resize-vue';
	import Header from '$lib/components/dashboard/Header.svelte';

	Quill.register('modules/imageResize', ImageResize);

	let { children } = $props();
</script>

<div class="min-h-full bg-input">
	<Header />
	{@render children?.()}
</div>
