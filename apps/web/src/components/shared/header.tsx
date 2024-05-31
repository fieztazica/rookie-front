import { auth } from '@/auth';
import { getCountCartItems } from '@/features/cart/countCartItems';
import Link from 'next/link';
import NavMenu from './nav';
import UserArea from './user-area';

type Props = {};

async function Header({}: Props) {
  const session = await auth();
  const res = await getCountCartItems(session?.user?.customer_id);
  const cartString = res?.data?.countCartItems
    ? `Cart (${res?.data?.countCartItems})`
    : 'Cart';
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
          <NavMenu cartString={cartString} />
          <UserArea />
        </div>
      </div>
    </header>
  );
}

export default Header;
