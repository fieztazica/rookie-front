import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getProductsTag = (options?: PaginationOptions) => {
  if (options) {
    return `products?${new URLSearchParams({
      page: options.page.toString(),
      perPage: options.perPage.toString(),
    }).toString()}`;
  }
  return 'products';
};

export const GET_PRODUCTS_BY_CATEGORY = gql(`
    query GetProductsByCategory(
        $input: String!
    ) {
        products(where: {
            categories: {
                some: {
                    category: {
                        is: {
                            name: {
                                contains: $input
                            }
                            displayName: {
                                contains: $input
                            }
                        }
                    }
                }
            }
        }) {
            id
            name
            displayName
            authors {
                author {
                    firstName
                    lastName
                    displayName
                }
            }
            categories {
                category {
                    name
                    displayName
                }
            }
            salePrice
            imageUrl
            price
        }
    }
`)

export const GET_PRODUCTS = gql(`
    query GetProducts($page: Int, $perPage: Int) {
        paginatedProducts(page: $page, perPage: $perPage) {
            data {
                id
                name
                displayName
                authors {
                    author {
                        firstName
                        lastName
                        displayName
                    }
                }
                categories {
                    category {
                        name
                        displayName
                    }
                }
                salePrice
                imageUrl
                price
            }
            meta {
                total
                lastPage
                currentPage
                perPage
                prev
                next
            }
        }
    }
`);

export async function getProducts(options?: PaginationOptions) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_PRODUCTS,
    variables: options,
    context: {
      fetchOptions: {
        next: {
          tags: [getProductsTag(options)],
        },
      },
    },
  });
}
