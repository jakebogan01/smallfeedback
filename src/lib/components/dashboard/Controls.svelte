<script>
	import { SETTINGS } from '$lib/constants.js';
	import { logout } from '$lib/utils/logout.js';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BellIcon from '@lucide/svelte/icons/bell';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section aria-labelledby="controls">
	<h3 id="controls" class="sr-only">Controls</h3>
	<div class="grid grid-cols-4 gap-3">
		<Button type="button" onclick={logout} aria-label="Sign out" class="cursor-pointer py-5.5">
			<LogOutIcon />
		</Button>
		<Button type="button" aria-label="Toggle theme" class="cursor-pointer py-5.5">
			<MoonIcon />
		</Button>
		<Button type="button" aria-label="Show notifications" class="cursor-pointer py-5.5">
			<BellIcon />
		</Button>
		<Button href={SETTINGS} aria-label="Visit account settings" class="cursor-pointer py-5.5">
			<SettingsIcon />
		</Button>
	</div>
</section>
