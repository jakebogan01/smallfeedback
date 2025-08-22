<script>
	import { toast } from 'svelte-sonner';
	import EditIcon from '@lucide/svelte/icons/edit';
	import { Button } from '$lib/components/ui/button';
	import * as ImageCropper from '$lib/components/ui/image-cropper';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	let src = $state('https://github.com/shadcn.png');

	const handleAvatarChange = () => console.log(src);
</script>

<div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3">
	<div>
		<h2 class="text-base/7 font-semibold">Update avatar</h2>
		<p class="text-xs/5 dark:text-accent-foreground">JPG, JPEG or PNG. 50MB max.</p>
	</div>
	<div class="flex items-center gap-x-8 md:col-span-2">
		<ImageCropper.Root
			bind:src
			onCropped={handleAvatarChange}
			onUnsupportedFile={(file) => {
				toast.error(`Unsupported file type: ${file.type}`);
			}}
		>
			<div class="relative">
				<ImageCropper.Preview class="rounded-md" />
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Button
								{...props}
								class="absolute -bottom-3 -left-3 rounded-full"
								variant="secondary"
								size="icon"
							>
								<EditIcon class="size-4" />
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="start">
						<ImageCropper.UploadTrigger>
							<DropdownMenu.Item>Upload a photo...</DropdownMenu.Item>
						</ImageCropper.UploadTrigger>
						<DropdownMenu.Item
							onclick={() => {
								src = '';
								handleAvatarChange();
							}}>Remove photo</DropdownMenu.Item
						>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
			<ImageCropper.Dialog>
				<ImageCropper.Cropper />
				<ImageCropper.Controls>
					<ImageCropper.Cancel />
					<ImageCropper.Crop />
				</ImageCropper.Controls>
			</ImageCropper.Dialog>
		</ImageCropper.Root>
	</div>
</div>
