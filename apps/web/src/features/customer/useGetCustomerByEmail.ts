import { useSuspenseQuery } from '@apollo/client';
import { GET_CUSTOMER_BY_EMAIL } from './customer.queries';
import { getClient } from '@/lib/apollo/apollo-client';
import { apolloClient } from '@/lib/apollo/ssr-client';

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
  return apolloClient.query({
    errorPolicy: 'all',
    query: GET_CUSTOMER_BY_EMAIL,
    variables: { email },
  });
}
