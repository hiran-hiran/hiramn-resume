import { client } from "@/shared/lib/hono";
import { redirect } from "next/navigation";
import { useTransition } from "react";

export const useLogout = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      const res = await client.api.auth.logout.$get();

      if (res.ok) {
        redirect("/login");
      }
    });
  };

  return { isPending, handleLogout };
};
