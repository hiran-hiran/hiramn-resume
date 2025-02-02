"use client";

import Link from "next/link";
import { Layout } from "@/components/Layout";
import PrintBtn from "@/components/PrintBtn";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/router";
import type { Career } from "@/shared/lib/newt";
import { useRef } from "react";
import "github-markdown-css";
import { useReactToPrint } from "react-to-print";

type Props = {
  // cv: Career;
  cv: string;
};

export default function CareerDocs(props: Props) {
  // const router = useRouter();
  // const session = useSessionContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  // if (session.isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!session.session) {
  //   router.push("/login");
  // }

  return (
    <Layout>
      <PrintBtn onClick={handlePrint} />
      <div className="cv" ref={contentRef}>
        <div
          className="markdown-body"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: props.cv }}
        />
        <Link href="/" className="button print-none">
          Back
        </Link>
      </div>
    </Layout>
  );
}
