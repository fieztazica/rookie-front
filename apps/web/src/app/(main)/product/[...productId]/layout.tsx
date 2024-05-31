import React from 'react';

type Props = {};

function Layout({ children }: React.PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col items-center justify-between p-2 md:p-8 lg:p-24 container mx-auto space-y-24">
      {children}
    </div>
  );
}

export default Layout;
