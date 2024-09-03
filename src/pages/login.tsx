import Layout from "@/components/Layout";
import TextInput from "@/components/TextInput";
import { supabaseClient } from "@/lib/supabaseClient";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const signIn = async () => {
    const { data } = await supabaseClient.auth.signInWithPassword({
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      email: email!,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      password: password!,
    });

    if (data.user) {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>ログイン | ヒラタの履歴書</title>
      </Head>
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
    </>
  );
}
