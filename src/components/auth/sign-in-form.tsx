import { useForm, SubmitHandler } from "react-hook-form";
import { signInFirebaseUser } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

type Inputs = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user = await signInFirebaseUser(data.email, data.password);
    if (!user) {
      throw new Error("User not created");
    }
    navigate("/dashboard");
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && (
        <span className="text-red-500">
          Password is required and must be at least 6 characters long
        </span>
      )}
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
      >
        Sign In
      </button>
    </form>
  );
};
