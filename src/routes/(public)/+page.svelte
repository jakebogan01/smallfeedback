<script>
	import pb from '$lib/pocketbase.js';
	import { logout } from '$lib/utils/logout.js';
</script>

<h1>Home page</h1>

{#if pb?.authStore?.isValid}
	<button onclick={logout} class="mr-4 cursor-pointer">logout</button>
{:else}
	<a href="/sign-in">sign in</a>
{/if}
