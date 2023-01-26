// if(process.env.NODE_ENV !== "production") {   // value of NODE_ENV will be production when deployed to Heroku
//     require("dotenv").config();               // implies that we are using .env of local repo when not in production
// }

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

// Database connection
let router;
console.log("mongodb://host.docker.internal:27017/csaudb")
mongoose.connect("mongodb://host.docker.internal:27017/csaudb", { // Provide Corresponding machine IP
    useNewUrlParser:true,
    // useFindAndModify:false,
    useUnifiedTopology: true
})
    .then(() => {           // makes sure that models are loaded and used after connection
        console.log("Connected to mongodb");
        router = require("./routes/router");
        app.use("/api/posts",router);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const PORT =  5000;        //  PORT will be populuated when deployed to Heroku
app.listen(PORT,() => {
    console.log(`Server started listening on ${PORT}`);
});