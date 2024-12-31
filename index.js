// const fs = require('fs')
const path = require('path')
// const pokemon = require('pokemon');

// fs.readFile('abc.txt', function(err, data) {
//     if (err) {
//         console.log("Error is present");
//     } else {
//         // console.log(data);
//         console.log(data.toString());
//     }
// })

// console.log(path.join('data', 'Hello.txt'))
// const connectToDb = require('./db')
// connectToDb();
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(pokemon.random());

// app.use(express.urlencoded({ extended: true }));



const express = require('express')
const app = require("./user")
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is working at ${PORT}`);
})



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
})



app.post("/submit-form", (req, res) => {
    res.send("Registered Successfully");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})


app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
})

