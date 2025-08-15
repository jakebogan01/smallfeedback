import pb from '$lib/pocketbase.js';
import { toast } from 'svelte-sonner';

export const logout = async () => {
	pb.authStore.clear();
	toast.success('Successfully signed out!');
};
