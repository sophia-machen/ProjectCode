//database we are using
const mysql = require('mysql2');
//use express to help build API
const express = require('express');
//express middleware that can be used to enable CORS
var cors = require('cors');
//body parsing middleware
const bodyParser = require('body-parser');
//HTTP request logger middleware
const logger = require('morgan');

//declare port
const API_PORT = 3001;
const app = express();
//use cors import for CORS
app.use(cors());
//declare router
const router = express.Router();

//create connection to database
//I created a MySQL database for this. If you are unable to access this, I have instruction in the ReadMe to create your own and how to change this code to reflect your new database
let connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '3308_project'
});

//checks if connection with the database was successful
connection.getConnection(function(err){
    (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

//at least one app.get() is required to get things to work idk why
app.get('/', function(req, res) {
    res.send('Hello!');
});

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// append /api for our http requests
app.use('/api', router);

//put database CRUD here
//this is where we will import information from the database to use, e.g. to allow users to log in

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));