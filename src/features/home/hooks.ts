import { client } from "@/shared/lib/hono";
import { redirect } from "next/navigation";

export const useLogout = () => {
  const handleLogout = async () => {
    const res = await client.api.auth.logout.$get();

    if (res.ok) {
      redirect("/login");
    }
  };

  return { handleLogout };
};
