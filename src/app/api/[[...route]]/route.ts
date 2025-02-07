import { Hono } from "hono";
import { handle } from "hono/vercel";
import docsHandler from "../handlers/docs";
import authHandler from "../handlers/auth";

const app = new Hono().basePath("/api");

const routes = app.route("/docs", docsHandler).route("/auth", authHandler);

export type AppType = typeof routes;
export const GET = handle(app);
export const POST = handle(app);
export const runtime = "edge";
