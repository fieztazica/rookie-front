import { signIn } from '@/auth.ts';
import { Button } from '@repo/ui/button.tsx';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('auth0');
      }}
    >
      <Button type="submit">Signin with Auth0</Button>
    </form>
  );
}
