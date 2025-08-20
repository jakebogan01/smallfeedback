<script>
	let { linkTo = '/', label, hoverTitle = null } = $props();
</script>

<a
	href={linkTo}
	aria-label={label}
	title={hoverTitle || label}
	class="flex items-center space-x-2 rounded-lg"
>
	<img src="/logo.png" alt="Logo" width="24" height="28" />
	<span>SmallFeedBack</span>
</a>
