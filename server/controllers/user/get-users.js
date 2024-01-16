const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

export default asyncHandler(async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }).lean();
        res.json(users);
    } catch (error) {
        console.error("Error retrieving users from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});