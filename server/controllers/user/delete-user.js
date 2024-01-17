import asyncHandler from "express-async-handler";
import User from "../../models/userModel";

export default asyncHandler(async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json(deletedUser);
    } catch (error) {
        console.error("Error deleting user from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
