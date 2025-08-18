<script>
	let { avatar, name } = $props();
</script>

<div class="flex min-w-80 items-center">
	<div class="shrink-0 pt-0.5">
		<img src={avatar} alt={name} width="40" height="40" class="size-10 rounded-full bg-white" />
	</div>
	<div class="ml-3 flex-1 text-sm">
		<p class="font-semibold">{name}</p>
		<p>Commented on your <a href="/" class="font-medium underline">post</a></p>
	</div>
</div>
