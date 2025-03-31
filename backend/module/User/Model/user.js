const { mongoose } = require("../../../database/mongo");  // Adjust path as needed

const userSchema = new mongoose.Schema({  // Fix the Schema declaration
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);
