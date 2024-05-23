import NavMenu from './nav';
import UserArea from './user-area';

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-2 bg-accent">
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
