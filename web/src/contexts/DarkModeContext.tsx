import { ReactNode, createContext, useState, useEffect } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeContext = createContext({} as DarkModeContextType);

export function DarkModeProvider(props: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
    localStorage.theme = !isDarkMode ? "dark" : "light";
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
}
