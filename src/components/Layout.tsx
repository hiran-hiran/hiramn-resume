import type { ReactNode } from "react";
import { Theme } from "./Theme";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Theme />
      <div className="container">{children}</div>
    </>
  );
};
