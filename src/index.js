const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect db
db.connect();


app.use(express.static(path.join(__dirname, 'public')));

// HTTP LOGGER
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// ROUTES INIT
route(app);

// START SERVER
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
