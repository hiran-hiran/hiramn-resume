import { useEffect, FC, ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { isDark, setIsDark } = useTheme();
  const handleClick = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.querySelector("body")?.classList.add("isDark");
    } else {
      document.querySelector("body")?.classList.remove("isDark");
    }
  }, [isDark]);

  return (
    <>
      <div className="theme-btn-container">
        <div
          onClick={handleClick}
          className={isDark ? "theme-btn-wrap isDark" : "theme-btn-wrap"}
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

      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
