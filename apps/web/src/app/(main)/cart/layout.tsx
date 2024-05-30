import React from 'react';

type Props = {};

function CartLayout({ children }: React.PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      {children}
    </div>
  );
}

export default CartLayout;
