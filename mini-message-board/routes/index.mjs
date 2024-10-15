import express from "express";
import messages from "../models/message.js";
import crypto from "crypto";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("./pages/index", { messages });
});

router.get("/detailMessages/:id", (req, res) => {
  const detailMessage = messages.find((x) =>  x.id == req.params.id);
   
  if (detailMessage ) {
    res.render("./pages/detailMessages", { detail: detailMessage });
  }
  else {
    res.status(404).send("Message not found");
  } 
  
});

router.get("/new", (req, res) => {
  res.render("./pages/new");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser.split(" ").join(""),
    added: new Date(),
    id: crypto.randomUUID()
  });

  res.redirect("/");
});

export default router;
