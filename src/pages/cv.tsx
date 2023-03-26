import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import fs from "fs";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "github-markdown-css";
import { useRef } from "react";
import PrintBtn from "@/components/PrintBtn";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

type Props = {
  cv: string;
};

const Cv: NextPage<Props> = ({ cv }) => {
  const router = useRouter();
  const session = useSessionContext();
  const printRef = useRef(null);

  if (session.isLoading) {
    return <p>Loading...</p>;
  }

  if (!session.session) {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>職務経歴書 | ヒラタの履歴書</title>
      </Head>
      <Layout>
        <PrintBtn printRef={printRef} />
        <div className="cv" ref={printRef}>
          <div className="markdown-body">
            <ReactMarkdown
              plugins={[gfm]}
              children={cv}
              linkTarget={"_blank"}
            />
          </div>
          <Link href="/" className="button print-none">
            Back
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Cv;

export const getStaticProps: GetStaticProps = async () => {
  const cv = fs.readFileSync(process.cwd() + "/src/cv/cv.md", "utf8");
  return {
    props: {
      cv,
    },
  };
};
