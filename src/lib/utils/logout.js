import pb from '$lib/pocketbase.js';
import { toast } from 'svelte-sonner';
import { goto } from '$app/navigation';

import { SIGNIN } from '$lib/constants.js';

export const logout = async () => {
	pb.authStore.clear();
	await goto(SIGNIN);
	toast.success('Successfully signed out!');
};
