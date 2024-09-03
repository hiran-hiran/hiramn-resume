import type { ReactNode } from "react";
import { Theme } from "./Theme";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Theme />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
