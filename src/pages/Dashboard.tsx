import { useContext } from "react";
import { UserContext } from "../context/contexts";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log("user from dashboard: ", user);
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1>Dashboard</h1>
      <p>Current user: {user?.email}</p>
    </div>
  );
};
