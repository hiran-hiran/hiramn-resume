import { serverClient } from "@/shared/lib/supabase/serverClient";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { HTTPException } from "hono/http-exception";

const app = new Hono()
  .post(
    "/login",
    validator("json", (value) => {
      return {
        email: value.email,
        password: value.password,
      };
    }),
    async (c) => {
      const formData = c.req.valid("json");

      const supabase = await serverClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw new HTTPException(401, { message: error.message });
      }

      if (data) {
        c.status(200);
        return c.body("good job");
      }
    }
  )
  .get("/logout", async (c) => {
    const supabase = await serverClient();
    await supabase.auth.signOut();

    c.header("Location", "/");
    c.status(307);

    return new Response("good job", {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  });

export default app;
