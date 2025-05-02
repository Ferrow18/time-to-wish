import { NavLink } from "react-router";

export const Hero = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-112px)] flex-col items-center justify-center gap-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl">Welcome to the Time To Wish</h1>
        <p className="text-xl">
          Time To Wish is a place where you can store all your birthdays and
          wish for them.
        </p>
      </div>
      <div className="flex gap-4">
        <NavLink
          to="/sign-in"
          className="cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/sign-up"
          className="cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        >
          Sign Up
        </NavLink>
      </div>
    </section>
  );
};
