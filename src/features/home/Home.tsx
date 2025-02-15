"use client";

import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useLogout } from "./hooks";
import { Button } from "@/components/Button";
import { useActionState } from "react";

export default function Home() {
  const { handleLogout } = useLogout();
  const [_, formAction, isPending] = useActionState(handleLogout, null);

  return (
    <div className="p-top">
      <Layout>
        <div className="content-wrap">
          <div className="left">
            <form className="left-inner" action={formAction}>
              <span className="head">Welcome!</span>
              <h1 className="title">
                こちらでは、私の履歴書と職務経歴書がご確認いただけます。
              </h1>
              <Button type="submit" variant="secondary" loading={isPending}>
                Logout
              </Button>
            </form>
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
  );
}
