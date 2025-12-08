const express = require('express');
const app = express();

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send("Server Node.js Express hoạt động!");
});

app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});
