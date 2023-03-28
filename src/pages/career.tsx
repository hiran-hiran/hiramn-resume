import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import Layout from "@/components/Layout";
import "github-markdown-css";
import { useRef } from "react";
import PrintBtn from "@/components/PrintBtn";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Career, getCareer } from "@/lib/newt";

type Props = {
  cv: Career;
};

const Career: NextPage<Props> = ({ cv }) => {
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
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: cv.career }}
          />
          <Link href="/" className="button print-none">
            Back
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Career;

export const getStaticProps: GetStaticProps = async () => {
  const cv = await getCareer();

  return {
    props: {
      cv,
    },
  };
};
