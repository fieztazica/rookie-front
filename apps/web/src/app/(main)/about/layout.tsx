import React from 'react';
import { Separator } from '@/components/ui/separator';

type Props = {};

function Layout({ children }: React.PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      <div className="w-full">
        <h1 className="text-xl font-bold">About Us</h1>
        <Separator className="my-2" />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
