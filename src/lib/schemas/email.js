import { z } from 'zod';

export const emailSchema = z.object({
	email: z
		.string({ required_error: 'Email address is required' })
		.trim()
		.min(1, { message: 'Email is required' })
		.max(254, { message: 'Email must be less than 255 characters' })
		.email({ message: 'Please enter a valid email address' })
});
