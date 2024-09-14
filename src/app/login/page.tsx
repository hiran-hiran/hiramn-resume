import Login from "@/features/login/Login";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ログイン | ヒラタの履歴書",
};

export default async function Page() {
  return <Login />;
}
