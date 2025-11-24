import { z } from 'zod/v4';

export const positiveNumberSchema = z.coerce
  .number('The id must be a number')
  .int('The id must be an integer')
  .nonnegative('The id must be a positive number');

function prettifyZodErrors(error: z.ZodError, separator = ', ') {
  if (error.issues.length === 1) {
    return error.issues[0].message;
  }

  const errors = error.issues.reduce((acc, issue) => {
    const path = issue.path[0] as string;
    if (path in acc) {
      acc[path] += `${separator}${issue.message}`;
      return acc;
    }

    return {
      ...acc,
      [path]: issue.message,
    };
  }, {} as { [key: string]: string });
  return errors;
}

const { success, error } = positiveNumberSchema.safeParse('123.5');

if (!success) {
  const errors = prettifyZodErrors(error);
  console.log(errors);
}
