"use client";

import { Layout } from "@/components/Layout";
import { client } from "@/shared/lib/hono";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const handleLogout = async () => {
    const res = await client.api.auth.logout.$get();

    if (res.ok) {
      redirect("/login");
    }
  };

  return (
    <div className="p-top">
      <Layout>
        <div className="content-wrap">
          <div className="left">
            <div className="left-inner">
              <span className="head">Welcome!</span>
              <h1 className="title">
                こちらでは、私の履歴書と職務経歴書がご確認いただけます。
              </h1>
              <button
                type="button"
                className="button button-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <div className="right">
            <div className="right-inner">
              <div className="link">
                {/* <Link href="/resume" className="link">
                  履歴書はこちら
                </Link> */}
                <Link href="/career" className="link">
                  職務経歴書はこちら
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
