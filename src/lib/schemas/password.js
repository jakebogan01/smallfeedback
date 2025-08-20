import { z } from 'zod';

export const passwordSchema = z.object({
	password: z
		.string({ required_error: 'Password is required' })
		.trim()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.max(71, { message: 'Password must be less than 72 characters' })
});
