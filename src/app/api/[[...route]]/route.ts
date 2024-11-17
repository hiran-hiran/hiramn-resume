import { Hono } from "hono";
import { handle } from "hono/vercel";
import { helloHandler } from "../handlers/hello";

const app = new Hono().basePath("/api");

const routes = app.get("/hello", ...helloHandler);

export type AppType = typeof routes;
export const GET = handle(app);
export const POST = handle(app);
export const runtime = "edge";
