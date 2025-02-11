import express from 'express';
import router from './routes/index.mjs';
import path from 'path';

const app = express();

// styles
const assetsPath = path.join(import.meta.dirname, 'public');

app.use(express.static(assetsPath));

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));

// settings
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

//  routes
app.use(router);

app.use((req, res) => {
  res.status(404).send('No Found');
});

const PORT = process.env.PORT ?? 1234;
const IP_NODE_SERVER = process.env.IP_NODE_SERVER ?? 'localhost';

app.listen(PORT, () => {
  console.log(`http://${IP_NODE_SERVER}:${PORT}`);
});
