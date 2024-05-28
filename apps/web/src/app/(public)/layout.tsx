import React from 'react';

type Props = {};

function PublicGroup({ children }: React.PropsWithChildren<Props>) {
  return <>{children}</>;
}

export default PublicGroup;
