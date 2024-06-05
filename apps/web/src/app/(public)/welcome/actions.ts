'use server';

import { z } from 'zod';
import { customerInformationSchema } from './schema';
import { redirect } from 'next/navigation';
import { signOut } from '@/auth';

export const submitCustomerInformation = async (
  values: z.infer<typeof customerInformationSchema>,
) => {
  console.log('values', values);

  const params = new URLSearchParams({
    api_key: process.env.API_KEY as string,
  });
  const apiUrl = `${process.env.API_URL}/auth/register?${params.toString()}`;
  const res = await fetch(new URL(apiUrl), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const body = await res.json();

  if (body?.statusCode < 200 || body?.statusCode >= 300)
    throw new Error(body?.message || 'Internal Server Error');

  console.log(res.status);
  await signOut();
  redirect('/');
};
