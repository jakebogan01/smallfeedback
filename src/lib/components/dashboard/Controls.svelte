<script>
	import { faker } from '@faker-js/faker';
	import { toggleMode } from 'mode-watcher';
	import { logout } from '$lib/utils/logout.js';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BellIcon from '@lucide/svelte/icons/bell';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import { Button } from '$lib/components/ui/button/index.js';
	import { toggleNotifications } from '$lib/utils/notifications.js';

	let { toggleAccountSettings = () => {} } = $props();

	const handleNotifications = () => {
		toggleNotifications(faker.person.fullName(), 'Has commented on your pose!');
	};
</script>

<section aria-labelledby="controls">
	<h3 id="controls" class="sr-only">Controls</h3>
	<div class="grid grid-cols-4 gap-3">
		<Button
			type="button"
			onclick={logout}
			aria-label="Sign out"
			title="Sign out"
			class="cursor-pointer py-5.5"
		>
			<span class="sr-only">Sign out</span>
			<LogOutIcon class="size-5" />
		</Button>
		<Button
			type="button"
			onclick={() => {
				if (!document.startViewTransition) {
					toggleMode();
					return;
				}
				document.startViewTransition(() => toggleMode());
			}}
			aria-label="Toggle theme"
			title="Toggle theme"
			class="cursor-pointer py-5.5"
		>
			<SunIcon class="hidden size-5 dark:inline" />
			<MoonIcon class="size-5 dark:hidden" />
		</Button>
		<Button
			type="button"
			onclick={handleNotifications}
			aria-label="Show notifications"
			title="Show notifications"
			class="cursor-pointer py-5.5"
		>
			<BellIcon class="size-5" />
		</Button>
		<Button
			type="button"
			onclick={toggleAccountSettings}
			aria-label="View account settings"
			title="Account settings"
			class="cursor-pointer py-5.5"
		>
			<SettingsIcon class="size-5" />
		</Button>
	</div>
</section>
