import { createHandlers } from "@/shared/lib/hono";
import { getCareer } from "@/shared/lib/newt";

export const careerHandler = createHandlers(async (c) => {
  const result = await getCareer();

  return c.json({
    result,
  });
});
