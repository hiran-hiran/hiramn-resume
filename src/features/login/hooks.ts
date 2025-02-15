import { client } from "@/shared/lib/hono";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const handleLogin = async ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
    if (!email || !password) {
      return;
    }

    const res = await client.api.auth.login.$post({
      json: {
        email,
        password,
      },
    });
    if (res.ok) {
      router.push("/");
    }
  };

  return { handleLogin };
};
