import { Hono } from "hono";
import { validator } from "hono/validator";

const app = new Hono().post(
  "/",
  validator("json", (value, can) => {
    return {
      email: value.email,
      password: value.password,
    };
  }),
  async (c) => {
    const data = c.req.valid("json");
    console.log("--------------", { data });

    return c.json({
      message: "Hello Next.js!",
      email: data.email,
      password: data.password,
    });
  }
);

export default app;
