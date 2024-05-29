import MainLayout from '@/src/app/layouts/main';
import React from 'react';

type Props = {};

function MainGroup({ children }: React.PropsWithChildren<Props>) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainGroup;
