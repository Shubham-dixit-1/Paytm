const mongoose = require("mongoose");
require("dotenv").config();

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(process.env.MONGODB_CONNECTIONURL);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("MongoDB connection error", error);
            process.exit(1);
        }
    }
}

// Export only the instance
module.exports = {dbInstance: new Database(), mongoose};
