require("dotenv").config();


const express = require("express");
const cors = require("cors");
const app = express();
// Configure Express middleware
app.use(
    cors({}), 
    express.json(), 
    express.urlencoded({ extended: true })
);
require("./config/mongoose.config");
require("./routes/author.routes")(app);
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));
