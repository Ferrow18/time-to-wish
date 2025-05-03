import { useContext } from "react";
import { UserContext } from "@/context/contexts";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        Loading...
      </div>
    );
  }
  return user ? children : <Navigate to="/sign-in" replace />;
};
