import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

export default app;
