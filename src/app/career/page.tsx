import type { Metadata } from "next";
import CareerDocs from "@/features/career/CareerDocs";
import { client } from "@/shared/lib/hono";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "職務経歴書 | ヒラタの履歴書",
};

export default async function Page() {
  const res = await client.api.career.$get();

  const cv = await res.text();
  // const content = JSON.parse(cv);

  return <CareerDocs cv={cv} />;
}
