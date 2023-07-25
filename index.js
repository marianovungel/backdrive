const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadRouter = require('./router');

app.get('/', (req, res) => {
  res.json("Está tudo bem!")
});

app.use("/upload", uploadRouter);

const port = process.env.PORT
app.listen(8080, () => {
  console.log(`Form running on port ${process.env.PORT}`);
});
