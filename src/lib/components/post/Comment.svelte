<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { faker } from '@faker-js/faker';
	import ReplyForm from '$lib/components/post/ReplyForm.svelte';
	// import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import ButtonGroup from '$lib/components/post/ButtonGroup.svelte';

	let { class: className, updateModalData = () => {} } = $props();
	let showReplyForm = $state(false),
		showEditForm = $state(false);

	const toggleReply = () => (showReplyForm = !showReplyForm);
	const toggleEdit = () => (showEditForm = !showEditForm);
</script>

<div class="group flex flex-row {className}">
	<img
		class="mt-1 inline-block size-7 rounded-full"
		src={faker.image.avatar()}
		alt={faker.person.fullName()}
	/>
	<!--    <Skeleton class="size-7 rounded-full bg-black/30" />-->
	<div class="mt-1 flex-1">
		<div class="flex flex-1 items-start justify-between px-4">
			<div>
				<h4 class="-mb-1 text-sm font-bold">{faker.person.firstName()}</h4>
				<span class="text-xs dark:text-accent-foreground">5 weeks ago</span>
				<!--                <Skeleton class="h-5 w-20 rounded bg-black/30" />-->
				<!--                <Skeleton class="mt-1 h-5 w-10 rounded bg-black/30" />-->
			</div>
			<div class="flex items-center space-x-2">
				<ButtonGroup {toggleReply} {toggleEdit} {updateModalData} />
			</div>
		</div>
		<div class="mt-1 ml-2 flex-1 px-2 text-sm leading-relaxed dark:text-accent-foreground">
			<p>{faker.word.words({ count: { min: 5, max: 40 } })}</p>
			<!--            <Skeleton class="h-6 w-full rounded bg-black/30" />-->
			<!--            <Skeleton class="mt-2 h-6 w-full rounded bg-black/30" />-->
		</div>
	</div>
</div>

{#if showReplyForm || showEditForm}
	<ReplyForm {className} {showReplyForm} {showEditForm} />
{/if}
