const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { response } = require('express');
mongoose.connect("mongodb+srv://mohammed_talha:happybirthday2u@cluster0.k390g.mongodb.net/test");

const User = mongoose.model('User', {
    name: String,
    email: String,
    address: String,
    number : Number,
    password : String,
    created: { type: String, default: Date.now },
});

app.use(express.json())
app.use(cors(["localhost:3000", "localhost:5000"]))



app.get('/home',(request,response)=>{
    response.send('checking')
})





mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(`mongoose error ${error.message}`));

app.listen(PORT, () => console.log(`The server is running on localhost: ${PORT}`))