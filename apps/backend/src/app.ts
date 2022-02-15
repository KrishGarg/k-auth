import express from "express";

import * as controllers from "./controllers";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Registering controllers.
Object.values(controllers).forEach(({ route, router }) => {
  app.use(route, router);
});

app.get("/", (_, res) => {
  return res.send("Hello World");
});

export default app;
export { PORT };
