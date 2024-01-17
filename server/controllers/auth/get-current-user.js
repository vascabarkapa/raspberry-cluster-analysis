import asyncHandler from 'express-async-handler';

export default asyncHandler(async (req, res) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error retrieving current logged user from the database:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
});