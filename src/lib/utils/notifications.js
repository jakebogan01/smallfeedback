import { toast } from 'svelte-sonner';

let lastToastIds = [],
	isShowing = false,
	resetTimeout;

const TOAST_COUNT = 6;
const BASE_DURATION = 4000;
const STAGGER_DELAY = 150;

export const toggleNotifications = (name, message) => {
	if (isShowing) {
		lastToastIds.forEach((id) => toast.dismiss(id));
		lastToastIds = [];
		isShowing = false;
		if (resetTimeout) {
			clearTimeout(resetTimeout);
			resetTimeout = null;
		}
		return;
	}
	lastToastIds = Array.from({ length: TOAST_COUNT }, () => {
		return toast(name, { description: message });
	});
	isShowing = true;
	const maxDuration = BASE_DURATION + (TOAST_COUNT - 1) * STAGGER_DELAY;
	resetTimeout = setTimeout(() => {
		lastToastIds.forEach((id) => toast.dismiss(id));
		lastToastIds = [];
		isShowing = false;
		resetTimeout = null;
	}, maxDuration);
};
