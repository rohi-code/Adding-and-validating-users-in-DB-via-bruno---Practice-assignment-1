const express = require('express');
const { resolve } = require('path');
const route = require('./routes')
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL).then(console.log("AHHAHAHA")).catch(e=>console.log(e))

const app = express();
const port = 3010;


app.use(express.json())
app.use(express.static('static'));
app.use("/",route)
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
