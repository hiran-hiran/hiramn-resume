"use client";

import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";
import TextInput from "@/components/TextInput";
import { useActionState, useState } from "react";
import { useLogin } from "./hooks";

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
            <div className="w-full">
              <p className="text-center font-bold text-3xl">
                Thank you for visiting
              </p>
              <h1 className="mt-10 text-sm">
                この度は、ご訪問頂きありがとうございます。
                <br />
                お知らせしました、ログイン情報でログインお願いいたします。
              </h1>
            </div>
          </section>
          <section className="right">
            <div className="w-full">
              <p className="text-center font-bold text-3xl">Login</p>

              <form className="mt-10 flex flex-col gap-y-5" action={formAction}>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="メールアドレス"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="パスワード"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-center">
                  <Button type="submit" loading={isPending}>
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
