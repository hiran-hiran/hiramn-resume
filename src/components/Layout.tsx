import type { ReactNode } from "react";
import { Theme } from "./Theme";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Theme />
      <div className="relative py-20 max-md:px-4 max-md:py-7">{children}</div>
    </>
  );
};
