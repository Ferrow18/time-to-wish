import { NavLink } from "react-router";

export const Nav = () => {
  return (
    <nav className="container mx-auto flex justify-between py-4">
      <NavLink to="/" className="cursor-pointer">
        Time To Wish
      </NavLink>
      <ul className="flex gap-4">
        <li className="cursor-pointer hover:underline">
          <NavLink to="/">Birthdays </NavLink>
        </li>
        <li className="cursor-pointer hover:underline">
          <NavLink to="/sign-in">User</NavLink>
        </li>
      </ul>
    </nav>
  );
};
