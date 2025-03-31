const User = require("../Model/user.js")

class userService {
        async getUser(req, res) {
            let users = await User.find()
            console.log("users found", users.length)
            if (!users.length) {
                return `No Users exist`
            }
            return users
        }

        async createUser(req, res) {
            try{
            let users = await User.create(req.body) 
            return users
            }catch(err){
                return `unable to create user ${err}`
            }
        }

        async login(req, res) {
            try {
                const { name, password } = req.body;
                if (!name || !password) {
                    return res.status(400).json({ success: false, message: "Name and password are required" });
                }
    
                const userLogin = await User.findOne({ name, password });
    
                if (!userLogin) {
                    console.log("Provide correct username and password")
                    return res.status(401).json({ success: false, message: "Invalid username or password" });
                }
    
                console.log("User logged in successfully:", userLogin);
                return res.status(200).json({ 
                    success: true, 
                    user: {
                        id: userLogin._id,
                        name: userLogin.name
                    }
                });
    
            } catch (err) {
                console.error("Login Error:", err);
                return res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }
        
    }
module.exports = new userService()