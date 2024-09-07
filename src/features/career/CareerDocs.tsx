"use client";

import Link from "next/link";
import { Layout } from "@/components/Layout";
import PrintBtn from "@/components/PrintBtn";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/router";
import type { Career } from "@/lib/newt";
import { useRef } from "react";
import "github-markdown-css";

type Props = {
  cv: Career;
};

export default function CareerDocs(props: Props) {
  // const router = useRouter();
  // const session = useSessionContext();
  const printRef = useRef(null);

  // if (session.isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!session.session) {
  //   router.push("/login");
  // }

  return (
    <Layout>
      <PrintBtn printRef={printRef} />
      <div className="cv" ref={printRef}>
        <div
          className="markdown-body"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: props.cv.career }}
        />
        <Link href="/" className="button print-none">
          Back
        </Link>
      </div>
    </Layout>
  );
}
