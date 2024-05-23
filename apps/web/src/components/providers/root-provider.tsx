import React, { PropsWithChildren } from 'react';
import ClientProvider from './client-provider';

type Props = {};

function RootProvider({ children }: PropsWithChildren<Props>) {
  return <ClientProvider>{children}</ClientProvider>;
}

export default RootProvider;
