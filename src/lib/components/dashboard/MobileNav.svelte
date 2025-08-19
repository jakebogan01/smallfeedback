<script>
	import { faker } from '@faker-js/faker';
	import { toggleMode } from 'mode-watcher';
	import XIcon from '@lucide/svelte/icons/x';
	import { fade, fly } from 'svelte/transition';
	import { logout } from '$lib/utils/logout.js';
	import Logo from '$lib/components/Logo.svelte';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BellIcon from '@lucide/svelte/icons/bell';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import { DASHBOARD, SETTINGS } from '$lib/constants.js';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import { Button } from '$lib/components/ui/button/index.js';

	let { toggleMobileMenu = () => {}, toggleNotifications = () => {} } = $props();
</script>

<div class="lg:hidden">
	<div
		transition:fade={{ duration: 100 }}
		aria-hidden="true"
		class="fixed inset-0 z-20 overflow-hidden bg-black/20 backdrop-blur-sm"
	></div>
	<div class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top p-2">
		<div transition:fly={{ y: 20, duration: 300 }} id="menu" class="rounded-md bg-background sm:shadow-xl">
			<div class="pt-3">
				<div class="flex items-center justify-between px-4">
					<Logo linkTo={DASHBOARD} label="Go to dashboard" />
					<div class="-mr-2">
						<button type="button" onclick={toggleMobileMenu} aria-label="Open menu" class="cursor-pointer">
							<XIcon class="size-8" />
						</button>
					</div>
				</div>
				<div class="flex flex-col p-4">
					<div class="flex items-center justify-between px-3">
						<div class="flex items-center">
							<div class="shrink-0 pt-0.5">
								<img
									src={faker.image.avatar()}
									alt={faker.person.fullName()}
									width="40"
									height="40"
									class="size-10 rounded-full bg-white"
								/>
							</div>
							<div class="ml-3 flex-1 text-sm">
								<p class="font-semibold">{faker.person.fullName()}</p>
								<p class="text-xs">{faker.word.sample()}@gmail.com</p>
							</div>
						</div>
						<div class="flex items-center space-x-4">
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
								variant="ghost"
								title="Toggle theme"
								class="cursor-pointer !p-0"
							>
								<SunIcon fill="white" class="hidden size-5 dark:inline" />
								<MoonIcon fill="primary" class="size-5 dark:hidden" />
							</Button>
							<Button
								type="button"
								aria-label="Show notifications"
								onclick={toggleNotifications}
								variant="ghost"
								title="Show notifications"
								class="cursor-pointer !p-0"
							>
								<BellIcon class="size-5 fill-primary dark:fill-white" />
							</Button>
						</div>
					</div>
					<hr class="mx-2 mt-2" />
					<Button
						href={SETTINGS}
						variant="ghost"
						aria-label="Visit account settings"
						title="Account settings"
						class="h-10 justify-start"
					>
						<SettingsIcon class="size-5" />
						<span>Settings</span>
					</Button>
					<Button
						type="button"
						variant="ghost"
						onclick={logout}
						aria-label="Sign out"
						title="Sign out"
						class="h-10 cursor-pointer justify-start"
					>
						<LogOutIcon class="size-4.5" />
						<span>Sign out</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
