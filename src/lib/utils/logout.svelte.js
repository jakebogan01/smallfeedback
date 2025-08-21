import { page } from '$app/state';
import pb from '$lib/pocketbase.js';
import { toast } from 'svelte-sonner';
import { goto } from '$app/navigation';
import { SIGNIN } from '$lib/constants.js';
import { USER } from '$lib/stores/user.svelte.js';

export const logout = async () => {
	pb.authStore.clear();
	USER.isAuthed = pb.authStore.isValid;
	if (page.url.pathname !== '/') await goto(SIGNIN);
	toast.success('Successfully signed out!');
};
