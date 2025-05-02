import { SignUpForm } from "../components/auth/SignUpForm";

export const SignUp = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-112px)] flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Sign Up page</h1>
      <SignUpForm />
    </div>
  );
};
