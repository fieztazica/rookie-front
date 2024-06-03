import { auth } from '@/auth';
import { SignIn } from '@/components/auth/sign-in';
import { SignOut } from '@/components/auth/sign-out';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Cloud,
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';

type Props = {};

async function UserArea({}: Props) {
  const session = await auth();
  if (!session) return <SignIn />;
  const name =
    session.user?.displayName ||
    session.user?.name ||
    session.user?.email ||
    'Unknown User';
  const shortHand =
    name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '??';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="hover:bg-white">
          <span className="font-semibold">Hi, {name}!</span>
          <Avatar className="ml-2 w-8 h-8">
            <AvatarImage
              src={session.user?.image || undefined}
              alt={session.user?.email || undefined}
            />
            <AvatarFallback>{shortHand}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/order/manage">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Order</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="https://github.com/fieztazica/rookie-store"
            target="_blank"
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOut>
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </DropdownMenuItem>
        </SignOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserArea;
