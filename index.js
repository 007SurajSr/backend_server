// var Express = require("express");
// var Mongoclient = require("mongodb").MongoClient;
// var cors = require("cors");
// const multer = require("multer");

// var app = Express();
// app.use(cors());

// var CONNECTION_STRING="mongodb+srv://8700suraj:Suraj@965411@cluster0.f4d8wsn.mongodb.net/todoapp1?retryWrites=true&w=majority ";

// var DATABASENAME = "todoapp1";
// var database;

// app.listen(5038,()=>{
//     Mongoclient.connect(CONNECTION_STRING,(error,client)=>{ 
//         database = client.db(DATABASENAME);
//         console.log("Mongo DB Connection is successful");
//     })
// })

// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const CONNECTION_STRING = "mongodb+srv://8700suraj:Suraj@965411@cluster0.f4d8wsn.mongodb.net/todoapp1?retryWrites=true&w=majority";
// const DATABASE_NAME = "todoapp1";
// let database;

// const port = 5038;

// app.listen(port, () => {
//   MongoClient.connect(CONNECTION_STRING, (error, client) => {
//     if (error) {
//       console.error("Failed to connect to MongoDB:", error);
//       return;
//     }
//     database = client.db(DATABASE_NAME);
//     console.log("MongoDB connection successful");
//   });
// });

const express = require('express')
const mongodb = require('mongoose')
const cors = require ('cors')
const UserModel = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

mongodb.connect("mongodb://127.0.0.1:27017/crud")

 
 
const port = 3000

app.use(express.json())


//Available routes
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

//  app.get('/', (req, res) => {
//    res.send('Hello World Suraj!')
//  })

// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello World Henry!')
//   })

//   app.get('/api/v1/signin', (req, res) => {
//     res.send('Hello World Sameer !')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(3001, ()=>{
    console.log("Server is Running")
}) 