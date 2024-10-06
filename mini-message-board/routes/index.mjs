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
  res.render("index", { links: links, users: users });
});

router.get("/new", (req, res) => {
  res.send("new");
});

export default router;
