const express = require('express');
require("dotenv").config();
const {dbInstance} = require("./database/mongo.js");  // No need to call it as a function
const userRoutes = require("./module/User/Router/userRoute.js");
const cors = require("cors")
const app = express();
const PORT = 3000;

dbInstance

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.options("*", cors());  // Allow all OPTIONS requests

// Middleware
app.use(express.json());  // Required for parsing JSON request bodies
app.use('/api', userRoutes);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
