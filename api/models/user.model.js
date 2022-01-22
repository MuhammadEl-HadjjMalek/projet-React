import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    phoneNo: { type: String, required: true, unique: true },
    pinCode: { type: String },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;