const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json('Sooraj')
})

app.listen(8888, () => { console.log(`Server started at  8888`) })