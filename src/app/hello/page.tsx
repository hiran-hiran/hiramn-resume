import { client } from "@/shared/lib/hono";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hello | ヒラタの履歴書",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await client.api.hello.$get();
  const resJson = await res.json();
  console.log({ resJson });

  return <pre>{resJson.message}</pre>;
}
