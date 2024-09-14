import Home from "@/features/home/Home";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ホーム | ヒラタの履歴書",
};

export default async function Page() {
  return <Home />;
}
