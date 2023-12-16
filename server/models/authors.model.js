// Import necessary modules
const mongoose = require("mongoose");

// Define the User schema using Mongoose
const AuthorSchema = mongoose.Schema ({
        // First name field with validation rules
        Name: {
            type: String,
            required: [true, "Name is required."],
            minLength: [3, "Name should be three characters or more."],
          },
        }, {
          timestamps: true, // Add timestamps option
        });
// Export the Mongoose model for the "User" schema
module.exports = mongoose.model("Author", AuthorSchema);
