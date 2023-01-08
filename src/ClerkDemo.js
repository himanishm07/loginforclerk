import React from "react";
// Import ClerkProvider
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// Get the Frontend API from the environment
const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function ClerkDemo() {
  return (
    // Wrap your entire app with ClerkProvider
    // Don't forget to pass the frontendApi prop
    <ClerkProvider frontendApi={frontendApi}>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Hello() {
  // Get the user's first name
  const { user } = useUser();

  return (
    <div className="App-header">
      {/* Mount the UserButton component */}
      <UserButton />
      {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
  );
}


export default ClerkDemo;

