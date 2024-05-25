import { auth } from '@/auth';
import NavMenu from './nav';
import UserArea from './user-area';

type Props = {};

function Header({}: Props) {
  const session = auth();
  return (
    <header className="p-2 bg-accent sticky top-0 z-50">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src="https://dummyimage.com/32x32.png"
              alt="rookie store's logo"
            />
          </div>
          <div className="text-lg font-bold uppercase">Rookie Store</div>
        </div>
        <div className="flex space-x-4 items-center">
          <NavMenu />
          <UserArea />
        </div>
      </div>
    </header>
  );
}

export default Header;
