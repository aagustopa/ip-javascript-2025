import { z } from 'zod/v4';

export const loginSchema = z.object({
    username: z.string().min(1, 'the username is required'),
    password: z.string().min(1, 'the password is required')
});
