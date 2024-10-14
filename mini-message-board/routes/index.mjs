import express from "express";
import messages from "../models/message.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("./pages/index", { messages });
});

router.get("/detailMessages", (req, res) => {
  const detailMessage = messages.find((x) => x.id === Number(req.params.id));
  console.log(detailMessage);
  res.render("./pages/detailMessages", { detailMessage });
  
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
