import app, { PORT } from "./app";

const inDetaProd = process.env.DETA_RUNTIME;

if (!inDetaProd) {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

// Deta instead asks for this.
export = app;
