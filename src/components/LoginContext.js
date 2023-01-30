

import { createContext } from "react";

export const LogginContext = createContext({
  loggedIn: "",
  setloggedIn: () => {},
});