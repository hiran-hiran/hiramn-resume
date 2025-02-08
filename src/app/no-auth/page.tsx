import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ohoho | ヒラタの履歴書",
};

export default async function Page() {
  return <p>ログインなしで見れるページ</p>;
}
