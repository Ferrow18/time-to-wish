import { SignUpForm } from "../components/auth/sign-up-form";

export const SignUp = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-112px)] flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Sign Up</h1>
      <SignUpForm className="w-96" />
    </div>
  );
};
