<script>
</script>

<div class="w-full space-y-5 rounded-md bg-white p-2 sm:p-6 lg:max-w-2xl dark:bg-white/10">
	{#each new Array(Math.floor(Math.random() * 10) + 1) as _}
		<div
			class="border-b border-slate-900/10 pb-6 last:border-b last:border-transparent dark:border-white/10 dark:last:border-transparent"
		>
			<div class="group flex flex-row">
				<img
					class="dark:border-whi mt-1 inline-block size-7 rounded-full dark:border"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="mt-1 flex-1">
					<div class="flex flex-1 items-start justify-between px-4 leading-tight font-bold">
						<div>
							<h4 class="-mb-1 text-sm leading-tight text-slate-700 dark:text-white">James</h4>
							<span class="text-xs font-normal text-slate-400 dark:text-white/60">5 weeks ago</span>
						</div>
						<div class="flex items-center space-x-2">
							<button
								type="button"
								aria-label="reply"
								class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
							>
								<svg
									class="size-4"
									viewBox="0 0 24 24"
									fill="currentColor"
									stroke="none"
									stroke-width="1.5"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									data-slot="icon"
									><path
										d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
									/><path
										d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
									/></svg
								>
							</button>
							<button
								type="button"
								aria-label="reply"
								class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
							>
								<svg
									class="size-4"
									viewBox="0 0 95 78"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="1.5"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									data-slot="icon"
									><path
										d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
										fill-rule="nonzero"
									/></svg
								>
							</button>
							<button
								type="button"
								aria-label="reply"
								class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="size-4"
									><path
										fill-rule="evenodd"
										d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
										clip-rule="evenodd"
									/></svg
								>
							</button>
						</div>
					</div>
					<div class="mt-1 ml-2 flex-1 px-2 text-sm text-slate-700 dark:text-white">
						Some faker words go here for some reason
					</div>
				</div>
			</div>
			<hr class="my-2 border-0 border-transparent" />
			{#each new Array(Math.floor(Math.random() * 8) + 1) as _}
				<div class="group mt-2 ml-12 flex flex-row">
					<img
						class="mt-1 inline-block size-7 rounded-full dark:border dark:border-white"
						src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
						alt=""
					/>
					<div class="mt-1 flex-1">
						<div class="flex flex-1 items-start justify-between px-4 leading-tight font-bold">
							<div>
								<h4 class="-mb-1 text-sm leading-tight text-slate-700 dark:text-white">Jake</h4>
								<span class="text-xs font-normal text-slate-400 dark:text-white/60">3 weeks ago</span>
							</div>
							<div class="flex items-center space-x-2">
								<button
									type="button"
									aria-label="reply"
									class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
								>
									<svg
										class="size-4"
										viewBox="0 0 24 24"
										fill="currentColor"
										stroke="none"
										stroke-width="1.5"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										data-slot="icon"
										><path
											d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
										/><path
											d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
										/></svg
									>
								</button>
								<button
									type="button"
									aria-label="reply"
									class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
								>
									<svg
										class="size-4"
										viewBox="0 0 95 78"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1.5"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										data-slot="icon"
										><path
											d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
											fill-rule="nonzero"
										/></svg
									>
								</button>
								<button
									type="button"
									aria-label="reply"
									class="text-xs font-normal text-slate-400 opacity-0 sm:transition sm:group-hover:opacity-100 sm:hover:text-blue-600 dark:text-white/60 dark:sm:hover:text-emerald-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="size-4"
										><path
											fill-rule="evenodd"
											d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
											clip-rule="evenodd"
										/></svg
									>
								</button>
							</div>
						</div>
						<div class="mt-1 ml-2 flex-1 px-2 text-sm text-slate-700 dark:text-white">
							Some awsome response of more words go here for some reason too!
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
