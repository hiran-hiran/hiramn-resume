import Resume from "@/features/resume/Resume";
import { client } from "@/shared/lib/hono";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "履歴書 | ヒラタの履歴書",
};

export default async function Page() {
  const res = await client.api.docs.resume.$get();
  const resume = await res.json();

  return <Resume resume={resume.result} />;
}
