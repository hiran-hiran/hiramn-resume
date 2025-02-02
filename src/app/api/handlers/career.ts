import { Hono } from "hono";
import { getCareer } from "@/shared/lib/newt";

const app = new Hono().get("/", async (c) => {
  const result = await getCareer();

  return c.html(result.career);
  // return c.json({
  //   result,
  // });
});

export default app;
