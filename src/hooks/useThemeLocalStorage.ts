import { useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const theme = { light: "light", dark: "dark" } as const;

export const useThemeLocalStorage = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return { theme, setTheme };
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);

  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  return window.localStorage.getItem(STORAGE_KEY);
};

const getServerSnapshot = () => {
  return null;
};

const setTheme = (val: keyof typeof theme) => {
  window.localStorage.setItem(STORAGE_KEY, val);
  dispatchEvent(new Event("storage"));
};
