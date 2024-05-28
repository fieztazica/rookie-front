import { auth } from '@/auth';
import { getCustomerByEmail } from '@/src/features/customer/useGetCustomerByEmail';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

type Props = {};

async function MainLayout({ children }: PropsWithChildren<Props>) {
  const session = await auth();
  if (!session || !session.user?.email)
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  const { data } = await getCustomerByEmail(session.user?.email);
  return (
    <div>
      {!data && (
        <div className="px-4 py-1 bg-accent">
          Seems like you are missing some information. Click{' '}
          <Link href="/welcome" className="font-semibold underline">
            here
          </Link>{' '}
          to provide.
        </div>
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
