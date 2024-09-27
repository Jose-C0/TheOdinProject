import express from "express";

const app = express();

app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("app", { foo: "FOO" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
