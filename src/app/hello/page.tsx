import { client } from "@/shared/lib/hono";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "hello | ヒラタの履歴書",
};

export default async function Page() {
  const res = await client.api.hello.$get();
  const resJson = await res.json();
  console.log({ resJson });

  return <pre>{resJson.message}</pre>;
}
