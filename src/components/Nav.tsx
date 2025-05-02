export const Nav = () => {
  return (
    <nav className="container mx-auto flex justify-between py-4">
      <h1 className="cursor-pointer">Time To Wish</h1>
      <ul className="flex gap-4">
        <li className="cursor-pointer hover:underline">Birthdays </li>
        <li className="cursor-pointer hover:underline">User</li>
      </ul>
    </nav>
  );
};
