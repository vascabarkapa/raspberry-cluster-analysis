import asyncHandler from 'express-async-handler';
import { User } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
    try {
        const user = await User.findByIdOrFail(req.params.id);
        res.json(user);
    } catch (error) {
        console.error("Error retrieving user from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});