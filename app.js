const express = require("express")
const taskRoutes= require("./routes/tasks ")
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found")
const db_con = require("./config/db_connect");
const Task = require("./models/Task");
const app = express()

//Middleware
app.use(express.static("./public"))
app.use(express.json())
app.use(notFound)
app.use(errorHandlerMiddleware)


//routes
app.use("/api/vl/tasks", taskRoutes)

const PORT = process.env.PORT || 7000;

const startServer = async() => {
    try {
        await db_con("mongodb://localhost:27017/taskDb")
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);                  
        })
    } catch (error) {
        console.log(error)        
    }
}

startServer();


