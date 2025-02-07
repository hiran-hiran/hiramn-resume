import type { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_ROUTE as string, {
  // https://zenn.dev/yoshikouki/articles/4e351b29a3cc56
  fetch: (input: RequestInfo | URL, requestInit?: RequestInit) =>
    fetch(input, {
      cache: "no-cache",
      ...requestInit,
    }),
});
