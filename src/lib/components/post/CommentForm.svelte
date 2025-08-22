<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import { toast } from 'svelte-sonner';
	import { faker } from '@faker-js/faker';
	import { zod } from 'sveltekit-superforms/adapters';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { createCommentSchema } from '$lib/schemas/comment.js';

	const formSchema = createCommentSchema;
	let btnDisabled = $state(false);

	const form = superForm(defaults({ comment: '' }, zod(formSchema)), {
		id: faker.number.int(),
		SPA: true,
		validators: zod(formSchema),
		resetForm: false,
		onUpdate: async ({ form }) => {
			if (form.valid) {
				try {
					btnDisabled = true;
					console.log(form.data);
					toast.success('Suggestion successfully created!');
				} catch (error) {
					btnDisabled = false;
					console.dir(error?.response, { depth: null });
					toast.error(error?.message);
				}
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="rounded-md dark:bg-card/40 dark:border p-2 sm:p-6 lg:max-w-2xl">
	<form class="space-y-4" enctype="multipart/form-data" use:enhance>
		<Form.Field {form} name="comment" class="sm:col-span-4">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label class="sr-only">Comment</Form.Label>
					<Textarea
						type="text"
						{...props}
						placeholder="Add a comment..."
						bind:value={$formData.comment}
						class="h-30 bg-background"
						inputmode="text"
						spellcheck="true"
						autocapitalize="on"
						autoComplete="off"
						minlength="1"
						maxlength="500"
						aria-label="Comment"
						required
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="flex justify-end pt-2">
			<Form.Button disabled={btnDisabled} variant="secondary" class="cursor-pointer">
				{#if btnDisabled}
					<Loader2Icon class="animate-spin" />
				{:else}
					Submit
				{/if}
			</Form.Button>
		</div>
	</form>
</div>
