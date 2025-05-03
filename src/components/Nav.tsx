import { NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/contexts";
import { UserInfo } from "./user-info";

export const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between py-4">
      <NavLink to="/" className="cursor-pointer">
        Time To Wish
      </NavLink>
      <ul className="flex items-center gap-4">
        {user ? (
          <>
            <li className="cursor-pointer hover:underline">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="cursor-pointer hover:underline">
              <UserInfo />
            </li>
          </>
        ) : (
          <li className="cursor-pointer hover:underline">
            <NavLink to="/sign-in">Sign in</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
