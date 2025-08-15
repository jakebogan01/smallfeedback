export const ssr = false;

import pb from '$lib/pocketbase.js';
import { redirect } from '@sveltejs/kit';
import { SIGNIN, SIGNUP } from '$lib/constants.js';

export async function load({ url }) {
	if (pb.authStore.isValid && (url.pathname === SIGNUP || url.pathname === SIGNIN)) {
		redirect(303, '/');
	}
}
