const express = require('express');
const dotenv  = require('dotenv');
const app       = express();
const port    = process.env.PORT || 3000;
const database= require('./database');
const studentsmiddle = require('./Router/router');

dotenv.config();

app.use(express.json());
database.mongoconnect();



app.use('/schoolDB',studentsmiddle);

app.use('/',(req,res)=>{
    res.send("Hello Every one Welcome to backend")
})

app.listen(port,()=>{
    console.log(`Connected to the port ${port}`);
})