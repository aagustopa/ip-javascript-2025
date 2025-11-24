import { z } from 'zod/v4';

export const registerSchema = z.object({
    username: z.string()
    .min(1, 'username is required')
    .min(3, 'At least 3 characters long')
    .max(20, 'max 20 characters long'),
    email: z.email()
    .min(1, 'emial is required')
    .max(100, 'max 100 characters long'),
    password: z.string()
    .min(1, 'password is required'),
    confirmPassword: z.string()
    .min(1, 'you need to complete the password')
}).refine((values) =>
    values.password === values.confirmPassword, {
    error: 'password do not match',
    path: ['confirmPassword']
}
)

export type RegisterFormValues = z.infer<typeof registerSchema>;