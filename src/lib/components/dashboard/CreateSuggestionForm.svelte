<script>
	import Quill from 'quill';
	import { tick } from 'svelte';
	import { useId } from 'bits-ui';
	import { onMount } from 'svelte';
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { cn } from '$lib/utils.js';
	import pb from '$lib/pocketbase.js';
	import { toast } from 'svelte-sonner';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { zod } from 'sveltekit-superforms/adapters';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { createSuggestionSchema } from '$lib/schemas/post.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';

	const formSchema = createSuggestionSchema;
	let { toggleCreateForm = () => {} } = $props();
	let btnDisabled = $state(false),
		editorError = $state(false),
		open = $state(false),
		editor = $state(),
		quill = $state();

	const tags = [
		{ label: 'Bug', value: 'zo8yow8g8dl3czf' },
		{ label: 'Issue', value: 'gioi5wyh1owin4p' },
		{ label: 'Improvement', value: 'numhe50c9lse9iw' }
	];

	const form = superForm(
		defaults(
			{
				title: '',
				tag: ''
			},
			zod(formSchema)
		),
		{
			SPA: true,
			validators: zod(formSchema),
			resetForm: false,
			onUpdate: async ({ form }) => {
				if (form.valid) {
					try {
						const delta = quill?.getContents();
						const html = quill?.root.innerHTML.trim();
						const hasText = delta && delta.ops && !(delta.ops.length === 1 && delta.ops[0].insert === '\n');
						const hasImage = html.includes('<img');
						if (!hasText && !hasImage) {
							editorError = true;
							return;
						}
						btnDisabled = true;
						form.data.description = html;
						await pb.collection('posts').create(form.data);
						quill.setContents([]);
						toast.success('Suggestion successfully created!');
						toggleCreateForm();
					} catch (error) {
						btnDisabled = false;
						console.dir(error?.response, { depth: null });
						toast.error(error?.message);
					}
				}
			}
		}
	);

	const { form: formData, enhance } = form;

	const closeAndFocusTrigger = (triggerId) => {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	};

	const triggerId = useId();

	onMount(() => {
		const toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],
			['link', 'image'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ size: ['small', false, 'large', 'huge'] }]
		];
		quill = new Quill(editor, {
			modules: {
				toolbar: { container: toolbarOptions },
				imageResize: {
					modules: ['Resize', 'DisplaySize', 'Toolbar']
				}
			},
			theme: 'snow'
		});
	});
</script>

<section class="mt-3" aria-labelledby="create-suggestion-form-title">
	<h3 id="create-suggestion-form-title" class="sr-only">Create suggestion form</h3>
	<div class="rounded-md dark:bg-black/50 px-4 py-6 sm:p-10">
		<form class="space-y-4" enctype="multipart/form-data" use:enhance>
			<div class="grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-6">
				<Form.Field {form} name="title" class="sm:col-span-4">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Title</Form.Label>
							<Input
								type="text"
								{...props}
								bind:value={$formData.title}
								inputmode="text"
								spellcheck="true"
								autocapitalize="on"
								autoComplete="off"
								minlength="1"
								maxlength="254"
								aria-label="Suggestion Title"
								required
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="tag" class="flex flex-col sm:col-span-2">
					<Popover.Root bind:open>
						<Form.Control id={triggerId}>
							{#snippet children({ props })}
								<Form.Label>Tag</Form.Label>
								<Popover.Trigger
									class={cn(
										buttonVariants({ variant: 'outline' }),
										'w-full justify-between',
										!$formData.tag && 'text-red'
									)}
									role="combobox"
									{...props}
								>
									{tags.find((f) => f.value === $formData.tag)?.label ?? 'Select tag'}
									<ChevronsUpDownIcon class="opacity-50" />
								</Popover.Trigger>
								<input
									hidden
									bind:value={$formData.tag}
									name={props.name}
									minlength="1"
									maxlength="254"
									aria-label="Tag"
								/>
							{/snippet}
						</Form.Control>
						<Popover.Content class="w-full max-w-60 p-0">
							<Command.Root class="">
								<Command.Input
									autofocus
									placeholder="Search tag..."
									class="outline-non h-9 border-none ring-0 focus:border-none focus:ring-0 focus:outline-none"
								/>
								<Command.Empty>No tag found.</Command.Empty>
								<Command.Group value="tags" class="">
									{#each tags as tag (tag.value)}
										<Command.Item
											value={tag.label}
											onSelect={() => {
												$formData.tag = tag.value;
												closeAndFocusTrigger(triggerId);
											}}
											class="cursor-pointer"
										>
											{tag.label}
											<CheckIcon class={cn('ml-auto', tag.value !== $formData.tag && 'text-transparent')} />
										</Command.Item>
									{/each}
								</Command.Group>
							</Command.Root>
						</Popover.Content>
					</Popover.Root>
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<label
				data-slot="form-label"
				class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[fs-error]:text-destructive {editorError
					? 'text-destructive'
					: ''}"
				id="description"
				for="description">Description</label
			>
			<div class="w-full rounded-md border {editorError ? 'border-destructive' : 'border-transparent'}">
				<div
					bind:this={editor}
					class="flex min-h-40 w-full min-w-0 rounded-b-md dark:!border-border shadow-xs md:text-sm"
				></div>
			</div>
			{#if editorError}
				<div class="text-sm font-medium text-destructive" aria-live="assertive">
					<span>Description is required</span>
				</div>
			{/if}
			<div class="flex justify-end pt-2">
				<div class="flex items-center gap-4">
					<Button type="button" onclick={toggleCreateForm} variant="outline" class="cursor-pointer">
						Cancel
					</Button>
					<Form.Button disabled={btnDisabled} variant="secondary" class="cursor-pointer">
						{#if btnDisabled}
							<Loader2Icon class="animate-spin" />
						{:else}
							Submit
						{/if}
					</Form.Button>
				</div>
			</div>
		</form>
	</div>
</section>
