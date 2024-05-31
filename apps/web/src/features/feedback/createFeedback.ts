import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const CREATE_FEEDBACK = gql(`
    mutation CreateFeedback($createFeedbackInput: FeedbackCreateInput!) {
        createFeedback(createFeedbackInput: $createFeedbackInput) {
            id
            message
            rating
            title
        }
    }
`);

export function createFeedback({
  customerId,
  productId,
  ...props
}: {
  customerId: string;
  productId: string;
  title: string;
  message: string;
  rating: number;
}) {
  return getClient().mutate({
    errorPolicy: 'all',
    mutation: CREATE_FEEDBACK,
    variables: {
      createFeedbackInput: {
        product: {
          connect: {
            id: productId,
          },
        },
        customer: {
          connect: {
            id: customerId,
          },
        },
        ...props,
      },
    },
  });
}
