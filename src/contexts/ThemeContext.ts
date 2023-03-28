import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type ThemeContext = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("incorrect use");
  }

  return theme;
};
