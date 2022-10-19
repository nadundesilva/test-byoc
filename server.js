const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 2000);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
