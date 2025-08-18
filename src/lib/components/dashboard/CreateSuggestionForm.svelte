<script>
	import { tick } from "svelte";
	import { useId } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import pb from '$lib/pocketbase.js';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import toast from 'svelte-5-french-toast';
	import { DASHBOARD } from '$lib/constants.js';
	import CheckIcon from "@lucide/svelte/icons/check";
	import { zod } from 'sveltekit-superforms/adapters';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { baseAuthSchema } from '$lib/schemas/auth.js';
	import * as Popover from "$lib/components/ui/popover/index.js";
	import * as Command from "$lib/components/ui/command/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";

	const formSchema = baseAuthSchema;
	let btnDisabled = $state(false),
        open = $state(false);

	const tags = [
		{ label: "Bug", value: "Bug" },
		{ label: "Issue", value: "Issue" },
		{ label: "Improvement", value: "Improvement" }
	];

	const form = superForm(
		defaults(
			{
				email: '',
				password: ''
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
						btnDisabled = true;
						await pb.collection('users').authWithPassword(form.data.email, form.data.password);
						await goto(DASHBOARD);
						toast.success('Successfully signed in!', { position: 'bottom-right' });
					} catch (error) {
						btnDisabled = false;
						console.dir(error?.response, { depth: null });
						toast.error(error?.message, { position: 'bottom-right' });
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
	}

	const triggerId = useId();
</script>

<section transition:fade class="mt-3" aria-labelledby="create-suggestion-form-title">
    <h3 id="create-suggestion-form-title" class="sr-only">Create suggestion form</h3>
    <div class="rounded-md bg-background/30 sm:p-4">
        <form class="space-y-6" use:enhance>
            <Form.Field {form} name="title">
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
            <Form.Field {form} name="tag" class="flex flex-col">
                <Popover.Root bind:open>
                    <Form.Control id={triggerId}>
                        {#snippet children({ props })}
                            <Form.Label>Tag</Form.Label>
                            <Popover.Trigger
                                class={cn(
                                  buttonVariants({ variant: "outline" }),
                                  "w-[200px] justify-between",
                                  !$formData.tag && "text-muted-foreground"
                                )}
                                role="combobox"
                                {...props}
                            >
                                {tags.find((f) => f.value === $formData.tag)?.label ??
						        "Select tag"}
                                <ChevronsUpDownIcon class="opacity-50" />
                            </Popover.Trigger>
                            <input hidden value={$formData.tag} name={props.name} />
                        {/snippet}
                    </Form.Control>
                    <Popover.Content class="w-[200px] p-0">
                        <Command.Root>
                            <Command.Input
                                autofocus
                                placeholder="Search tag..."
                                class="h-9 outline-non border-none ring-0 focus:outline-none focus:ring-0 focus:border-none"
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
                                    >
                                        {tag.label}
                                        <CheckIcon class={cn(
                                            "ml-auto",
                                            tag.value !== $formData.tag && "text-transparent"
                                          )}
                                        />
                                    </Command.Item>
                                {/each}
                            </Command.Group>
                        </Command.Root>
                    </Popover.Content>
                </Popover.Root>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="description">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Description</Form.Label>
                        <Textarea
                            {...props}
                            class="flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-base shadow-xs ring-offset-background transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"
                            bind:value={$formData.description}
                        />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Button disabled={btnDisabled} class="w-full cursor-pointer">
                {#if btnDisabled}
                    <Loader2Icon class="animate-spin" />
                {:else}
                    Submit
                {/if}
            </Form.Button>
        </form>
    </div>
</section>
