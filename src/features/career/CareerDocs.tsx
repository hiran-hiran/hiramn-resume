"use client";

import Link from "next/link";
import { Layout } from "@/components/Layout";
import PrintBtn from "@/components/PrintBtn";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "github-markdown-css";

type Props = {
  cv: string;
};

export default function CareerDocs(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

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
