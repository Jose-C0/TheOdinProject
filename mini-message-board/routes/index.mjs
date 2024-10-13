import express from "express";
import messages from "../models/message.js";

const router = express.Router();

const stylesheet = `<link rel="stylesheet" href="./styles.css" />`;
const detailsMessage = "../";

router.get("/", (req, res) => {
  res.render("./pages/index", { messages });
});
router.get("/detailMessages", (req, res) => {
  res.render("./pages/detailMessages", { messages, stylesheet });
});

router.get("/new", (req, res) => {
  res.render("./pages/new");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser.split(" ").join(""),
    added: new Date(),
  });

  res.redirect("/");
});

export default router;
