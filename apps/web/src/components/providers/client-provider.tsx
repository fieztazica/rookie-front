'use client';

import React, { PropsWithChildren } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql/',
  cache: new InMemoryCache(),
});

type Props = {};

function ClientProvider({ children }: PropsWithChildren<Props>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ClientProvider;
