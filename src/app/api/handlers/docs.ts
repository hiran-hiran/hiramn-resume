import { Hono } from "hono";
import { getCareer, getResume } from "@/shared/lib/newt";

const app = new Hono()
  .get("/career", async (c) => {
    const result = await getCareer();

    return c.html(result.career);
  })
  .get("/resume", async (c) => {
    const result = await getResume();

    return c.json({
      result,
    });
  });

export default app;
