"use client";
import { Layout } from "@/components/Layout";
import PrintBtn from "@/components/PrintBtn";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "github-markdown-css";
import { LinkButton } from "@/components/LinkButton";

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
        <div className="mt-10 flex justify-center">
          <LinkButton href="/">Back</LinkButton>
        </div>
      </div>
    </Layout>
  );
}
