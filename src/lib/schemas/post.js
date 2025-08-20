import { z } from 'zod';

export const createSuggestionSchema = z.object({
	title: z
		.string({ required_error: 'Title is required' })
		.trim()
		.min(1, { message: 'Title is required' })
		.max(254, { message: 'Title must be less than 255 characters' }),
	tag: z.string({ required_error: 'Tag is required' }).trim().min(1, { message: 'Tag is required' })
});
