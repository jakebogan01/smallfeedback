<script>
	import Head from '$lib/components/Head.svelte';
	import Post from '$lib/components/post/Post.svelte';
	import Comments from '$lib/components/post/Comments.svelte';
	import CommentForm from '$lib/components/post/CommentForm.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
</script>

<Head
	page_title="SmallFeedBack | Feedback Post"
	description="Read and engage with feedback posts on SmallFeedBack. Leave comments, vote on ideas, and join the conversation — all anonymously."
	keywords="view feedback post, leave comments, vote on ideas, anonymous discussion, feedback conversation, post feedback, engage anonymously"
/>

<main class="mt-4 pb-8 lg:mt-0">
	<div class="mx-auto w-full px-4 sm:px-6 lg:max-w-350 lg:px-8">
		<h1 class="sr-only">Suggestion title</h1>
		<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
			<aside class="top-8 grid shrink-0 grid-cols-1 gap-12 lg:sticky lg:col-span-2 lg:mt-8 lg:gap-4">
				<Post />
				<CommentForm />
			</aside>
			<div class="grid grid-cols-1 lg:col-span-2 lg:mt-8">
				<Comments />
				<Pagination />
			</div>
		</div>
	</div>
</main>
