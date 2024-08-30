import { FC, ReactNode } from "react";
import { Theme } from "./Theme";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Theme />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
