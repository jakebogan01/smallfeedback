import pb from '$lib/pocketbase.js';
import toast from 'svelte-5-french-toast';

export const logout = async () => {
	pb.authStore.clear();
	toast.success('Successfully signed out!', { position: 'bottom-right' });
};
