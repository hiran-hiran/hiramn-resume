"use client";
import { useThemeLocalStorage } from "@/shared/hooks/useThemeLocalStorage";

export const Theme = () => {
  const { theme, setTheme } = useThemeLocalStorage();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    theme === "dark"
      ? document.querySelector("body")?.classList.remove("isDark")
      : document.querySelector("body")?.classList.add("isDark");
  };

  return (
    <div className="theme-btn-container">
      <button
        type="button"
        onClick={handleClick}
        className={`theme-btn-wrap ${theme === "dark" ? "isDark" : ""}`}
      >
        <span className="dark">
          <img src="/dark.png" alt="dark mode" />
        </span>
        <span className="light">
          <img src="/light.png" alt="light mode" />
        </span>
        <span className="btn-theme" />
      </button>
    </div>
  );
};
