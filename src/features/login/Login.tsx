"use client";

import { Layout } from "@/components/Layout";
import TextInput from "@/components/TextInput";
import { client } from "@/shared/lib/hono";
import { supabaseBrowserClient } from "@/shared/lib/supabaseBrowserClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const signIn = async () => {
    if (!email || !password) {
      return;
    }

    const res = await client.api.login.$post({
      json: {
        email,
        password,
      },
    });
    const data = await res.json();

    console.log({ data });

    // const { data } = await supabaseBrowserClient.auth.signInWithPassword({
    //   email,
    //   password,
    // });

    // if (data.user) {
    //   router.push("/");
    // }
  };

  return (
    <Layout>
      <section className="p-login">
        <div className="content-wrap">
          <section className="left">
            <div className="left-inner">
              <span className="head">Thank you for visiting</span>
              <h1 className="title">
                この度は、ご訪問頂きありがとうございます。
                <br />
                お知らせしました、ログイン情報でログインお願いいたします。
              </h1>
            </div>
          </section>
          <section className="right">
            <div className="right-inner">
              <span className="head">Login</span>

              <div className="form">
                <div className="input">
                  <TextInput
                    id="email"
                    className="auth-input"
                    type="email"
                    placeholder="メールアドレス"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input">
                  <TextInput
                    id="password"
                    className="auth-input"
                    type="password"
                    placeholder="パスワード"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" className="button" onClick={signIn}>
                  Login
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
