<script>
	import { tick } from 'svelte';
	import { useId } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import pb from '$lib/pocketbase.js';
	import { toast } from 'svelte-sonner';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { zod } from 'sveltekit-superforms/adapters';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import { createSuggestionSchema } from '$lib/schemas/createSuggestion.js';

	const formSchema = createSuggestionSchema;
	let { toggleCreateForm = () => {} } = $props();
	let btnDisabled = $state(false),
		open = $state(false);

	const tags = [
		{ label: 'Bug', value: 'zo8yow8g8dl3czf' },
		{ label: 'Issue', value: 'gioi5wyh1owin4p' },
		{ label: 'Improvement', value: 'numhe50c9lse9iw' }
	];

	const form = superForm(
		defaults(
			{
				title: '',
				tag: '',
				description: ''
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
						console.log(form.data);
						btnDisabled = true;
						await pb.collection('posts').create(form.data);
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
</script>

<section class="mt-3" aria-labelledby="create-suggestion-form-title">
	<h3 id="create-suggestion-form-title" class="sr-only">Create suggestion form</h3>
	<div class="rounded-md bg-background/30 px-4 py-6 sm:p-10">
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
										!$formData.tag && 'text-muted-foreground'
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
						<Popover.Content class="w-full p-0">
							<Command.Root>
								<Command.Input
									autofocus
									placeholder="Search tag..."
									class="outline-non h-9 border-none ring-0 focus:border-none focus:ring-0 focus:outline-none"
								/>
								<Command.Empty>No tag found.</Command.Empty>
								<Command.Group value="tags">
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
			<Form.Field {form} name="description">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Description</Form.Label>
						<Textarea
							{...props}
							class="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-base shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
							bind:value={$formData.description}
							inputmode="text"
							spellcheck="true"
							autocapitalize="on"
							autoComplete="off"
							minlength="1"
							maxlength="500"
							aria-label="Description"
							required
						/>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<div class="flex justify-end pt-2">
				<Form.Button disabled={btnDisabled} class="cursor-pointer">
					{#if btnDisabled}
						<Loader2Icon class="animate-spin" />
					{:else}
						Submit
					{/if}
				</Form.Button>
			</div>
		</form>
	</div>
</section>
