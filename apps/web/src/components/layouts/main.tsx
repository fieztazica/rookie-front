import React, { PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {};

function MainLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
