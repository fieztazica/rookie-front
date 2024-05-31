import { auth } from '@/auth';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { getCustomerByEmail } from '@/features/customer/getCustomerByEmail';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

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
        <div className="px-4 py-1 bg-accent border-b">
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
