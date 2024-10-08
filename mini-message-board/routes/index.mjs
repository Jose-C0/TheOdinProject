import express from "express";

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("./pages/index", { messages });
});

router.get("/new", (req, res) => {
  res.render("./pages/new")
});

export default router;
