import { useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const theme = { light: "light", dark: "dark" } as const;

export const useThemeLocalStorage = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot);

  return { theme, setTheme };
};

const subscribe = (callback: () => void) => {
  console.log(callback);

  window.addEventListener("storage", callback);

  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  return window.localStorage.getItem(STORAGE_KEY);
};

const setTheme = (val: keyof typeof theme) => {
  window.localStorage.setItem(STORAGE_KEY, val);
  dispatchEvent(new Event("storage"));
};
