import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export function useDarkMode() {
  const value = useContext(DarkModeContext);

  return value;
}
