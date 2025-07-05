import { SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

export default function Authentication() {
  return (
    <div className='flex justify-end'>
      <SignedOut>
        <SignIn routing="path" path="/sign-in" />
        <SignUp routing="path" path="/sign-up" />
      </SignedOut>
      <SignedIn>
        <div className='flex justify-end'>
          <p>You are already signed in</p>
        </div>
      </SignedIn>
    </div>
  );
}