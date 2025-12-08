const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();

// HTTP LOGGER
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine("handlebars", engine());
app.set("view engine", "handlebars");


app.get('/home', (req, res) => {
   
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000/home");
});
