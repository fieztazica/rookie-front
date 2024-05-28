import MainLayout from '@/components/layouts/main';
import React from 'react';

type Props = {};

function MainGroup({ children }: React.PropsWithChildren<Props>) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainGroup;
