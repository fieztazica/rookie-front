import Link from 'next/link';
import NavMenu from './nav';
import UserArea from './user-area';
import { auth } from '@/auth';

type Props = {};

async function Header({}: Props) {
  const session = await auth();
  return (
    <header className="p-2 bg-accent sticky top-0 z-50">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div>
              <img
                src="https://dummyimage.com/32x32.png"
                alt="rookie store's logo"
              />
            </div>
            <div className="text-lg font-bold uppercase">Rookie Store</div>
          </div>
        </Link>
        <div className="flex space-x-4 items-center">
          <NavMenu
            customerId={session?.user?.customer_id}
          />
          <UserArea />
        </div>
      </div>
    </header>
  );
}

export default Header;
