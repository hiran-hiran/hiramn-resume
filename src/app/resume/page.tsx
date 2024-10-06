import Resume from "@/features/resume/Resume";
import { getResume } from "@/shared/lib/newt";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "履歴書 | ヒラタの履歴書",
};

export default async function Page() {
  const resume = await getResume();

  return <Resume resume={resume} />;
}
