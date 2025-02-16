"use client";

import { Layout } from "@/components/Layout";
import TextInput from "@/components/TextInput";
import { useActionState, useState } from "react";
import { useLogin } from "./hooks";
import { Button } from "@/components/Button";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { handleLogin } = useLogin();

  const [_, formAction, isPending] = useActionState(
    () => handleLogin({ email, password }),
    null
  );

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

              <form className="form" action={formAction}>
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
                <Button type="submit" loading={isPending}>
                  Login
                </Button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
