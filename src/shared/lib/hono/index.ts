import type { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";
import { createFactory } from "hono/factory";

export const { createHandlers } = createFactory();
export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_ROUTE as string);
