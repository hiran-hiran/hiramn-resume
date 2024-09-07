import { getCareer } from "@/lib/newt";
import type { Metadata } from "next";
import CareerDocs from "@/features/career/CareerDocs";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "職務経歴書 | ヒラタの履歴書",
};

export default async function Page() {
  const cv = await getCareer();

  return <CareerDocs cv={cv} />;
}
