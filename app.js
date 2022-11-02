import userRouter from "./src/router/users.router.js";
// import express
import express, { response } from "express";

// set the port to 8000
const PORT = 8000;

// create my express app by invoking the express function
const app = express(); 

// Register the express json middleware
app.use(express.json());

// route listener
app.use('/users', userRouter),


app.listen(PORT,() => {
    console.log("project running on port", PORT);
})