const express=require("express");
const app=express()
const path=require("path")

const Schema=require("./schema")
const data=require("./data")
const mongoose = require('mongoose');




app.use(express.json()); // Middleware to parse JSON bodies

// This middleware is used to parse incoming JSON data in the request body. It is built into Express 4.16+ and replaces body-parser.json().
// It allows you to handle application/json-type data in POST requests.

app.use(express.urlencoded({ extended: true })); // Middleware to parse form-encoded data
// This is the built-in equivalent of bodyParser.urlencoded() provided in Express 4.16.0+


// mongodb://127.0.0.1:27017/surajj
mongoose.connect("mongodb://127.0.0.1:27017/MERN")
.then(() => {
    console.log("Connected to MongoDB successfully!");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


const refreshAll = async () => {
    try {
        // Delete existing data
        await Schema.deleteMany({});
        console.log("Existing data deleted!");
        // Insert new data
        await Schema.insertMany(data);
        console.log("New data inserted successfully!");
    } catch (err) {
        console.error("Error refreshing data:", err);
    }
};

// Trigger the refresh function when needed
refreshAll();


app.get("/data", async (req, res) => {
    try {
        const data = await Schema.find({});
        res.json({ data });
    } catch (err) {
        // next(err);
        res.send("error is running")
    }
});

app.get("/data", async (req, res) => {
    try {
        // Fetch only firstName field
        const data = await Schema.find({}, "firstName");
        res.json({ data });
    } catch (err) {
        res.status(500).send("Error occurred");
    }
});



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/submit-form',(req,res)=>{
    console.log(req.body.Namee);
    console.log(req.body.lastName);
    res.send("I read your data");
})

// app.post("/hello",(req,res)=>{
//     console.log(req.body)
//     res.send("hello world");
// })

app.get("/abc",(req,res)=>{
res.send("hello")
})


module.exports = app;