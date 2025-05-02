import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className="container mx-auto flex justify-between py-4">
      <NavLink to="/" className="cursor-pointer">
        Time To Wish
      </NavLink>
      <p>© 2025 Time To Wish</p>
    </footer>
  );
};
