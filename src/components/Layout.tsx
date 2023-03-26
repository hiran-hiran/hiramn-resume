import { useEffect, FC, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(false);
  // const handleClick = () => {
  //   dispatch(isDark());
  // };

  // useEffect(() => {
  //   if (themeState) {
  //     document.querySelector("body")?.classList.add("isDark");
  //   } else {
  //     document.querySelector("body")?.classList.remove("isDark");
  //   }
  // }, [themeState]);

  return (
    <>
      <div className="theme-btn-container">
        <div
          // onClick={handleClick}
          className={theme ? "theme-btn-wrap isDark" : "theme-btn-wrap"}
        >
          <div className="dark">
            <img src="/dark.png" alt="dark mode" />
          </div>
          <div className="light">
            <img src="/light.png" alt="light mode" />
          </div>
          <div className="btn-theme"></div>
        </div>
      </div>

      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
