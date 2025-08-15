<div class="mt-7 flex justify-between">
	<div
		class="inline-flex items-center divide-x divide-gray-200 overflow-hidden rounded-md bg-white shadow dark:divide-transparent dark:bg-white/10 dark:shadow-none"
	>
		<button
			type="button"
			id="searchBtn"
			aria-label="Search"
			class="group flex w-9 items-center space-x-1.5 overflow-hidden py-2 pr-2 pl-2.5 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:w-32 sm:hover:bg-blue-500 dark:hover:bg-emerald-600"
			style="will-change: transform"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				stroke="currentColor"
				class="size-4 min-w-4 fill-blue-700 stroke-none sm:transition sm:group-hover:fill-white sm:group-hover:stroke-white dark:fill-white"
				><path
					fill-rule="evenodd"
					d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
					clip-rule="evenodd"
				/></svg
			>
			<span
				class="text-sm text-slate-500 opacity-0 sm:transition sm:duration-300 sm:ease-in-out sm:group-hover:text-white sm:group-hover:opacity-100 dark:text-white"
				>Search...</span
			>
		</button>
	</div>

	<div
		class="inline-flex items-center divide-x divide-gray-200 overflow-hidden rounded-md bg-white shadow dark:divide-transparent dark:bg-white/10 dark:shadow-none"
	>
		<button
			type="button"
			id="popuplarBtn"
			aria-label="Sort by most liked"
			class="group p-2.5 sm:transition sm:hover:bg-blue-500 dark:hover:bg-emerald-600"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				stroke="currentColor"
				class="size-4 fill-none stroke-blue-700 sm:transition sm:group-hover:fill-white sm:group-hover:stroke-none dark:stroke-white"
				><path
					d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
				/></svg
			>
		</button>
		<button
			type="button"
			id="commentBtn"
			aria-label="Sort by most commented"
			class="group p-2.5 sm:transition sm:hover:bg-blue-500 dark:hover:bg-emerald-600"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				stroke="currentColor"
				class="size-4 fill-none stroke-blue-700 sm:transition sm:group-hover:fill-white sm:group-hover:stroke-none dark:stroke-white"
				><path
					fill-rule="evenodd"
					d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<button
			type="button"
			id="orderBtn"
			aria-label="Sort by recent"
			class="group p-2.5 sm:transition sm:hover:bg-blue-500 dark:hover:bg-emerald-600"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				stroke="currentColor"
				class="size-4 fill-blue-700 stroke-none sm:transition sm:group-hover:fill-white sm:group-hover:stroke-white dark:fill-white"
				><path
					fill-rule="evenodd"
					d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
	</div>
</div>
