import { signIn } from '@/auth.ts';
import { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export function SignIn({ children }: PropsWithChildren) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('auth0');
      }}
    >
      {children ? (
        children
      ) : (
        <Button type="submit">
          <LogIn className="mr-2 h-4 w-4" />
          <span>Sign In</span>
        </Button>
      )}
    </form>
  );
}
