const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already taken"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    first_name: {
        type: String,
        required: [true, "First Name is required"]
    },
    last_name: {
        type: String,
        required: [true, "Last Name is required"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    }
}, {
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);
module.exports = User;