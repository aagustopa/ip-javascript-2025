import { z } from 'zod/v4';

export const toDoSchema = z.object({
  task: z
    .string('The task must be a string')
    .min(1, 'The task is required')
    .min(3, 'The task must be at least 3 characters'),

  isCompleted: z.boolean('The isCompleted must be a boolean').optional(),
});
