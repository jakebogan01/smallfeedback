import { z } from 'zod';

export const createCommentSchema = z.object({
	comment: z
		.string({ required_error: 'The comment section is required' })
		.trim()
		.min(1, { message: 'The comment section is required' })
		.max(499, { message: 'The comment section must be less than 500 characters' })
});
