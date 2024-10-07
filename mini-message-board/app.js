import express from "express";
import router from "./routes/index.mjs";
import path from "path";

const app = express();

// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

// settings
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(import.meta.dirname, "views"));

// routes
app.use(router);

app.use((req, res) => {
  res.status(404).send("No Found");
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
