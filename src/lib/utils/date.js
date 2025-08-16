export function toISODate(dateString) {
	try {
		const date = new Date(dateString);
		const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
		const day = String(date.getDate()).padStart(2, '0');
		const year = date.getFullYear();

		return `${month}/${day}/${year}`;
		// eslint-disable-next-line no-unused-vars
	} catch (e) {
		console.error('Invalid date string passed to toISODate:', dateString);
		return '';
	}
}

export function timeAgo(dateString) {
	try {
		const date = new Date(dateString);
		const now = new Date();
		const seconds = Math.floor((now - date) / 1000);

		const intervals = {
			year: 31536000,
			month: 2592000,
			week: 604800,
			day: 86400,
			hour: 3600,
			minute: 60,
			second: 1
		};

		for (const [unit, value] of Object.entries(intervals)) {
			const count = Math.floor(seconds / value);
			if (count >= 1) {
				return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
			}
		}
		return 'just now';
	} catch (e) {
		console.error('Invalid date string passed to timeAgo:', dateString);
		return '';
	}
}
