<div class="w-full rounded-md bg-white p-2 sm:p-6 lg:max-w-2xl dark:bg-white/10">
	<form class="relative">
		<label for="comment" class="sr-only">Add your comment</label>
		<textarea
			rows="3"
			name="comment"
			id="comment"
			minlength="3"
			maxlength="500"
			class="block w-full resize-none rounded-md border border-slate-900/20 bg-white px-3 py-1.5 text-base text-slate-700 ring-0 outline-none placeholder:text-slate-400 focus:ring-0 focus:-outline-offset-1 sm:text-sm/6 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 focus:dark:outline-emerald-400"
			placeholder="Communication is key..."
			required
		></textarea>
		<div class="pt-6" aria-hidden="true">
			<div class="flex h-9 justify-end">
				<button
					type="submit"
					id="postBtn"
					aria-label="Post comment"
					class="ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white sm:hover:bg-blue-500 dark:bg-emerald-600 dark:sm:hover:bg-emerald-500"
					>Post</button
				>
			</div>
		</div>
	</form>
</div>
