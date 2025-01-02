import { Context, Hono } from "hono";
import { serveStatic } from 'hono/bun';

const app = new Hono();

// Serve static files from the public directory
app.use('/*', serveStatic({root: './public'}));

app.get('/version', (c: Context) => {
  // Return a response whole body contains the 
  // version of bun running on the server
  return c.text(Bun.version);
});

export default app;