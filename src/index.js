const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


// HTTP LOGGER
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  res.send('');
});


// START SERVER
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
