import { createHandlers } from "@/shared/lib/hono";
// import { createFactory } from "hono/factory";

export const helloHandler = createHandlers(async (c) => {
  //   const param = c.req;
  console.log("--------------", { c });

  return c.json({
    message: "Hello Next.js!",
  });
});
