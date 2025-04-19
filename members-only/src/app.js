const path = require("node:path");
const express = require("express");

const session = require("express-session");
const passport = require("passport");

const routes = require("./routes/index.js")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(routes);

const PORT = process.env.PORT_NODE_SERVER ?? 3000;
const IP_NODE_SERVER = process.env.IP_NODE_SERVER ?? "localhost";

app.listen(PORT, () => {
  console.log(`http://${IP_NODE_SERVER}:${PORT}`);
});
