import { defineHandler } from "nitro"

export default defineHandler((event) => {
  event.res.headers.set("Content-Type", "text/html; charset=utf-8");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nitro</title>
</head>
<body>
  <h1>This is your brand new Nitro project 🚀</h1>
  <p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
  <p>Learn more from 📖 <a href="https://nitro.build/guide" target="_blank">Nitro Documentation</a></p>
</body>
</html>`;
});
