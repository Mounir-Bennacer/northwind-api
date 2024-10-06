import createApp from "@/lib/create-app";
import openAPI from "@/lib/open-api";
import index from "@/routes/index.route";

const app = createApp();

openAPI(app);

const routes = [index] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = (typeof routes)[number];

export default app;
