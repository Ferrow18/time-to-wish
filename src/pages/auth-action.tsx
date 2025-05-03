import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { verifyEmail } from "../hooks/useAuth";
import { Link } from "react-router";

export const AuthAction = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    if (mode === "verifyEmail" && oobCode) {
      const verify = async () => {
        try {
          const result = await verifyEmail(oobCode);
          console.log(result);
          setResult(result);
        } catch (error) {
          console.log(error);
          setResult(false);
        }
      };
      verify();
    }
  }, [mode, oobCode]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">{mode}</h1>
      <p className="text-2xl">{oobCode}</p>
      <p className="text-2xl">
        {result
          ? "Email successfully verified, you can now sign in"
          : "Email verification failed"}
      </p>
      {result && (
        <Link
          to="/sign-in"
          className="cursor-pointer rounded-full bg-white px-4 py-2 text-black transition-colors hover:bg-amber-200"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};
