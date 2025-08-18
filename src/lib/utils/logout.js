import pb from '$lib/pocketbase.js';
import { goto } from '$app/navigation';
import toast from 'svelte-5-french-toast';
import { SIGNIN } from '$lib/constants.js';

export const logout = async () => {
	pb.authStore.clear();
	await goto(SIGNIN);
	toast.success('Successfully signed out!', { position: 'bottom-right' });
};
