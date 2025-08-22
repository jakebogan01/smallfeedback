<script>
	import * as Password from '$lib/components/ui/password';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let { children, form, formData, enhance, pageType, btnDisabled, useStrongPwd = true } = $props();
</script>

<form class="space-y-6" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Input
					type="email"
					{...props}
					bind:value={$formData.email}
					inputmode="email"
					spellcheck="false"
					autocapitalize="none"
					autoComplete="email"
					minlength="1"
					maxlength="254"
					aria-label="Email address"
                    class=""
					required
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Password</Form.Label>
				<Password.Root>
					<Password.Input
						type="password"
						{...props}
						bind:value={$formData.password}
						inputmode="text"
						spellcheck="false"
						autocapitalize="none"
						autoComplete="current-password"
						minlength="8"
						maxlength="71"
						aria-label="Password"
                        class=""
						required
					>
						<Password.ToggleVisibility class="cursor-pointer" />
					</Password.Input>
					{#if useStrongPwd}
						<Password.Strength class="" />
					{/if}
				</Password.Root>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	{@render children?.()}
	<Form.Button disabled={btnDisabled} variant="secondary" class="w-full cursor-pointer">
		{#if btnDisabled}
			<Loader2Icon class="animate-spin" />
		{:else}
			Submit
		{/if}
	</Form.Button>
	<div>
		<p class="inline text-sm/6">
			Already a member? Sign in
			<Button href={pageType} variant="ghost" class="h-auto p-0">here</Button>
		</p>
	</div>
</form>
