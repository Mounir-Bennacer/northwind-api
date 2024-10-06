import { OpenAPIHono } from "@hono/zod-openapi";

import notFound from "@/middlewares/not-found";
import onError from "@/middlewares/on-error";
import { pinoLogger } from "@/middlewares/pino-logger";

const app = new OpenAPIHono();

app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  throw new Error("This is an error");
});

app.notFound(notFound);
app.onError(onError);

export default app;
