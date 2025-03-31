const userService = require("../Services/userService"); // Import the User Service

class userController{
    async getUser(req, res){
        try {
            const users = await userService.getUser(req, res); // Fetch all users from the database
            return res.json(users); // Return users in JSON format
        } catch (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    async createUser(req, res){
        try{
            const users = await userService.createUser(req, res);
            return users
        } catch (err) {
            console.error("Error while creating user", err);
            return res
        }
    }

    async login(req, res, next) {
        try {
            // Call the service function and return the response
            return await userService.login(req, res);
        } catch (err) {
            console.error("Error while logging in:", err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}

module.exports = new userController();
