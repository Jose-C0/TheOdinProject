import express from "express";
import router from "./routes/index.mjs"
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

// app.set("view engine", "ejs");

// routes
app.use(router);

 
app.use((req, res) => {
  res.status(404).send("No Found");
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
