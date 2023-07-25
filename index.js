require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "/*");
  res.header("Access-Control-Allow-Methods", 'GET,POST');
  app.use(cors())
  next();
})
app.use(cors())

const uploadRouter = require('./router');

app.get('/', (req, res) => {
  res.json("Está tudo bem!")
});

app.use("/upload", uploadRouter);

const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Form running on port ${process.env.PORT}`);
});
