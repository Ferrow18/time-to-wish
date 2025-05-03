import { LoginForm } from "../components/auth/sign-in-form";

export const SignIn = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Sign In</h1>
      <LoginForm className="w-96" />
    </div>
  );
};
