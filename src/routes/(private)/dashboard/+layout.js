export const ssr = false;

import pb from '$lib/pocketbase.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
	if (!pb.authStore.isValid) {
		redirect(303, '/');
	}
}
