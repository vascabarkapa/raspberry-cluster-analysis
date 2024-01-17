import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';

export default asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }

        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            res.status(400);
            throw new Error("User is already registered with that email address");
        }

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
