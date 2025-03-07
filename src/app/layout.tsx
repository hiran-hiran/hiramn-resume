import type { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/common.scss";
import "@/styles/resume.scss";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
