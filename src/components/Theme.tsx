import { useThemeLocalStorage } from "@/hooks/useThemeLocalStorage";

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
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={handleClick}
        className={`theme-btn-wrap ${theme === "dark" ? "isDark" : ""}`}
      >
        <div className="dark">
          <img src="/dark.png" alt="dark mode" />
        </div>
        <div className="light">
          <img src="/light.png" alt="light mode" />
        </div>
        <div className="btn-theme" />
      </div>
    </div>
  );
};
