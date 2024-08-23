import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const client = useSupabaseClient();
  const session = useSessionContext();

  const handleLogout = async () => {
    await client.auth.signOut();
  };

  if (session.isLoading) {
    return "Loading...";
  }

  if (!session.session) {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>ヒラタの履歴書</title>
      </Head>

      <div className="p-top">
        <Layout>
          <div className="content-wrap">
            <div className="left">
              <div className="left-inner">
                <span className="head">Welcome!</span>
                <h1 className="title">
                  こちらでは、私の履歴書と職務経歴書がご確認いただけます。
                </h1>
                <button className="button button-white" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

            <div className="right">
              <div className="right-inner">
                <div className="link">
                  <Link href="/resume" className="link">
                    履歴書はこちら
                  </Link>
                  <Link href="/career" className="link">
                    職務経歴書はこちら
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
