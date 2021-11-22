import express from "express";
import jsonserver from "json-server";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = jsonserver.create();
const port = 8e3;
app.use(express.static(path.join(__dirname, "/www/")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/www/index.html"));
});
app.use("/api", jsonserver.defaults({
  readOnly: true
}));
app.use("/api", jsonserver.router(path.join(__dirname, "/db.json")));
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
