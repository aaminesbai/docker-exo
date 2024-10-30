const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world !! Exo docker');
});

app.listen(port, () => {
  console.log(`Server running : http://localhost:${port}`);
});
