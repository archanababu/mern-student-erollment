const express = require('express');
const cors = require('cors');

//This configures, so we can have environment variables in dotenv file
require('dotenv').config();

//Creating express server
const app = express();
const port = process.env.PORT || 5000;

//Cors middleware. This allows us to parse json
app.use(cors());
app.use(express.json());

//Start server on port: 5000
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});