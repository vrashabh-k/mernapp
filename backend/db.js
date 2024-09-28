const mongoose = require('mongoose');
const mongoURI='mongodb+srv://gofood:gofood@gofood.anvmd.mongodb.net/?retryWrites=true&w=majority&appName=gofood';

const mongoDB=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected");
    });
}

module.exports=mongoDB;     