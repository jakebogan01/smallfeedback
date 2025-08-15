<script>
	import pb from '$lib/pocketbase.js';
	import { logout } from '$lib/utils/logout.js';
	import Head from '$lib/components/Head.svelte';
</script>

<Head
	page_title="SmallFeedBack | Home"
	description="SmallFeedBack is the anonymous feedback platform where you can create boards, gather opinions, and spark meaningful discussions on any topic."
	keywords="anonymous feedback platform, create feedback board, share opinions online, discussion board platform, topic feedback website, gather anonymous feedback"
/>

<h1>Home page</h1>

{#if pb?.authStore?.isValid}
	<button onclick={logout} class="mr-4 cursor-pointer">logout</button>
{:else}
	<a href="/sign-in">sign in</a>
{/if}
