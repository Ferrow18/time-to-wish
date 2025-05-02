import { useForm, SubmitHandler } from "react-hook-form";
import { createFirebaseUser } from "../../hooks/useAuth";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user = await createFirebaseUser(data.name, data.email, data.password);
    if (!user) {
      throw new Error("User not created");
    }
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        className="rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        {...register("name", { required: true })}
      />
      {errors.name && <span className="text-red-500">Name is required</span>}
      <input
        type="email"
        placeholder="Email"
        className="rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">Email is required</span>}
      <input
        type="password"
        placeholder="Password"
        className="rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-500">Password is required</span>
      )}
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
      >
        Sign Up
      </button>
    </form>
  );
};
