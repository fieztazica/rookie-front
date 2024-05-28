import { z } from 'zod';

export const customerInformationSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Email is invalid.' }),
  phoneNumber: z
    .string()
    .min(10, {
      message: 'Phone number must be at least 10 characters.',
    })
    .max(12, {
      message: 'Phone number must be at most 12 characters.',
    }),
  gender: z.string().optional(),
  accountId: z.string(),
});
