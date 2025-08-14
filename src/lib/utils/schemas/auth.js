import { z } from 'zod';

export const baseAuthSchema = z.object({
	email: z
		.string({ required_error: 'Email address is required' })
		.trim()
		.min(1, { message: 'Email is required' })
		.max(254, { message: 'Email must be less than 255 characters' })
		.email({ message: 'Please enter a valid email address' }),
	password: z
		.string({ required_error: 'Password is required' })
		.trim()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.max(71, { message: 'Password must be less than 72 characters' }),
});
