import React from 'react';
import WelcomeForm from './form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

type Props = {};

async function WelcomePage({}: Props) {
  const session = await auth();
  if (!session) return redirect('/');
  if (!session.user || !session.user?.email || !session.user?.id)
    return redirect('/');
  return (
    <div className="p-24 container mx-auto flex flex-col items-center justify-center">
      <div className="max-w-md">
        <div className="mb-4">
          <h1 className="text-3xl font-black">{`👋 Welcome!`}</h1>
          <p className='text-sm'>Please fill out your information.</p>
        </div>
        <WelcomeForm email={session.user?.email} accountId={session.user?.id} />
      </div>
    </div>
  );
}

export default WelcomePage;
