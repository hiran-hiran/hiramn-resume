import { createHandlers } from "@/shared/lib/hono";

export const helloHandler = createHandlers(async (c) => {
  console.log("--------------", { c });

  return c.json({
    message: "Hello Next.js!",
  });
});
