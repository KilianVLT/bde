const express = require('express');
const route = require('./src/routes/index.route');
const app = express();
const port = 3000;


app.use('/', route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});