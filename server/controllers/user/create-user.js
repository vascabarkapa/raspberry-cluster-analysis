import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../../models/userModel";

export default asyncHandler(async (req, res) => {
    try {
        const { email } = req.body;
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            res.status(400);
            throw new Error("User is already registered with that email address");
        }

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;

        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
