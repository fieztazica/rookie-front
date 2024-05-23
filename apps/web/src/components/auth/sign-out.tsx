import { signOut } from '@/auth.ts';
import { LogOut } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';

export function SignOut({ children }: PropsWithChildren) {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      {children ? (
        children
      ) : (
        <Button type="submit">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </Button>
      )}
    </form>
  );
}
