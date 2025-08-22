<script>
	import { fade, scale } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button/index.js';
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';

	let { updateModalData = () => {}, ...props } = $props();

	const handleDeletion = () => console.log(props?.id);
</script>

<div role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="relative z-100">
	<div transition:fade aria-hidden="true" class="fixed inset-0 bg-black/40 transition-opacity"></div>
	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				transition:scale
				class="relative transform overflow-hidden rounded-lg dark:bg-card px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
			>
				<div class="sm:flex sm:items-start">
					<div
						class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-200 sm:mx-0 sm:size-10"
					>
						<TriangleAlertIcon class="size-6 text-destructive" />
					</div>
					<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 id="dialog-title" class="text-base font-semibold">
							Delete {props?.target}
						</h3>
						<div class="mt-2">
							<p class="text-sm dark:text-accent-foreground">
								Are you sure you want to delete this {props?.target}? This {props?.target} will be permanently
								removed from our servers forever. This action cannot be undone.
							</p>
						</div>
					</div>
				</div>
				<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
					<Button onclick={handleDeletion} type="button" variant="destructive" class="cursor-pointer sm:ml-3">
						Delete
					</Button>
					<Button onclick={() => updateModalData({})} type="button" variant="outline" class="h-9 cursor-pointer border">
						Cancel
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
