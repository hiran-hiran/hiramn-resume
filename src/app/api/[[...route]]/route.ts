import { Hono } from "hono";
import { handle } from "hono/vercel";
import helloHandler from "../handlers/hello";
import careerHandler from "../handlers/career";
import authHandler from "../handlers/auth";

const app = new Hono().basePath("/api");

const routes = app
  .route("/hello", helloHandler)
  .route("/career", careerHandler)
  .route("/auth", authHandler);

export type AppType = typeof routes;
export const GET = handle(app);
export const POST = handle(app);
export const runtime = "edge";
