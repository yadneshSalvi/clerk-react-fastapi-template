import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

export default function Home() {
  const { user } = useUser();

  return (
    <main className="p-8">
      <SignedOut>
        <h1 className="text-2xl font-bold mb-4">Welcome! Please sign in to continue.</h1>
      </SignedOut>
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">
          Hey {user?.firstName || user?.username || 'there'}. Welcome to your dashboard!
        </h1>
        <p>You are successfully signed in.</p>
      </SignedIn>
    </main>
  );
}
