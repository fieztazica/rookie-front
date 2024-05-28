import { z } from 'zod';

export const ReviewSchema = z.object({
  title: z
    .string()
    .min(10, {
      message: 'Title must be at least 10 characters.',
    })
    .max(50, {
      message: 'Title must be at most 50 characters.',
    }),
  message: z
    .string()
    .min(20, {
      message: 'Message must be at least 20 characters.',
    })
    .max(512, {
      message: 'Message must be at most 512 characters.',
    }),
  rating: z.string({
    required_error: 'Please rate this product from 1-5.',
  }),
});
