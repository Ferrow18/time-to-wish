import { User } from "firebase/auth";
import { createContext } from "react";

type UserContextType = {
  user: User | null;
  loading: boolean;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
});
