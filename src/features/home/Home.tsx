"use client";

import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useLogout } from "./hooks";

export default function Home() {
  const { isPending, handleLogout } = useLogout();

  return (
    <div className="p-top">
      <Layout>
        <div className="content-wrap">
          <div className="left">
            <div className="w-full">
              <p className="text-center font-bold text-3xl">Welcome</p>
              <h1 className="mt-10 text-sm">
                こちらでは、私の履歴書と職務経歴書がご確認いただけます。
              </h1>
              <div className="mt-8 flex justify-center">
                <Button
                  variant="secondary"
                  loading={isPending}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="w-full">
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
