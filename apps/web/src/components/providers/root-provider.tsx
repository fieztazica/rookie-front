import React, { PropsWithChildren } from 'react';
import ClientProvider from './client-provider';
import { ApolloWrapper } from './apollo-provider';
import { auth } from '@/auth';

type Props = {};

async function RootProvider({ children }: PropsWithChildren<Props>) {
  const session = await auth();
  return <ApolloWrapper session={session}>{children}</ApolloWrapper>;
}

export default RootProvider;
