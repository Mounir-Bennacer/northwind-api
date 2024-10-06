import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json" with { type: "json" };

export default function openAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler", // alternate' | 'bluePlanet' | 'default' | 'deepSpace' | 'kepler' | 'mars' |  'moon' | 'purple' | 'saturn' | 'solarized' | 'none'
      layout: "classic", // "classic" | "modern"
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  );
}
