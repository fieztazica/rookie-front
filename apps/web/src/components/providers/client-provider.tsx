'use client';

import React, { PropsWithChildren } from 'react';

type Props = {};

function ClientProvider({ children }: PropsWithChildren<Props>) {
  return <>{children}</>;
}

export default ClientProvider;
