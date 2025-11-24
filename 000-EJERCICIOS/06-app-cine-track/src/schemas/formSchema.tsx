import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string()
})
export default formSchema;