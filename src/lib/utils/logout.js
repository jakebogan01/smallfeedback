import pb from '$lib/pocketbase.js';
import { goto } from '$app/navigation';
import { toast } from 'svelte-sonner';

export const logout = async () => {
	pb.authStore.clear();
	await goto('/');
	toast.success('Successfully signed out!');
};
