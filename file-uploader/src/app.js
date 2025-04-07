const path = require('node:path');
const express = require('express');
const expressSession = require('express-session');
// const multer = require('multer');

const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('../src/db/generated/prisma_client');

// const session = require('express-session');
const passport = require('passport');

const routes = require('./routes/index.js');

const app = express();

// config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'a santa at nasa',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, // ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ eded: false }));

// routes
app.use(routes);

const PORT = process.env.PORT_NODE_SERVER ?? 3000;
const IP_NODE_SERVER = process.env.IP_NODE_SERVER ?? 'localhost';

app.listen(PORT, () => {
  console.log(`http://${IP_NODE_SERVER}:${PORT}`);
});
