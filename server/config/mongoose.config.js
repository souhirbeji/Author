// Import mongoose library for MongoDB interactions
const mongoose = require("mongoose");

// Connect to the MongoDB database using the DB_NAME from .env
mongoose.connect("mongodb://127.0.0.1:27017/Authors")

    .then(() =>console.log("Established connection to the database..."))
    .catch((error) => console.error("Error connecting to the database:", error.message)
);
