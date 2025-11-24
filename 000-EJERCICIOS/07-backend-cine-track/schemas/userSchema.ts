import { z } from 'zod/v4';

export const userSchema = z.
    object({
        username: z.string().min(1, 'the username is required'),
        email: z.email().min(1, 'the email is required'),
        password: z.string().min(1, 'the password is required'),
        confirmPassword: z.string().min(1, 'you gotta confirm the password')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'password dont match',
        path: ['confirmPassword'],
    });
