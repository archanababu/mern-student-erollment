const express = require('express');
const cors = require('cors');

//Connect to MongoDB database
const mongoose = require('mongoose');

//This configures, so we can have environment variables in dotenv file
require('dotenv').config();

//Creating express server
const app = express();
const port = process.env.PORT || 5000;

//Cors middleware. This allows us to parse json
app.use(cors());
app.use(express.json());

/*MongoDB URI and start connection with the db uri
    ATLAS_URI : Environment variable stored in dotenv file
    Flags:
        - set useNewUrlParser, useCreateIndex to TRUE to deal with MongoDB updates
*/
const uri =  process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
});

//Starts server on port: 5000
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});