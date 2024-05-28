import { useSuspenseQuery } from '@apollo/client';
import { GET_CUSTOMER_BY_EMAIL } from './customer.queries';
import { getClient } from '@/lib/apollo-client';

export function useGetCustomerByEmail(email: string) {
  return useSuspenseQuery(GET_CUSTOMER_BY_EMAIL, {
    errorPolicy: 'all',
    variables: {
      email,
    },
    queryKey: `customer_${email}`,
  });
}

export async function getCustomerByEmail(email: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_CUSTOMER_BY_EMAIL,
    variables: { email },
  });
}
