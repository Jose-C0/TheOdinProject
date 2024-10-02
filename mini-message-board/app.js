import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/new", (req, res) => {
  res.render("new", { links: links, users: users });
});

app.use((req, res) => {
  res.status(404).send("No Found");
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
