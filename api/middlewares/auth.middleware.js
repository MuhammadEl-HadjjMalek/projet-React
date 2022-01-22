import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";


dotenv.config();

// Protect access route to not authorized users
const protect = asyncHandler(async(req, res, next) => {

    // Variable for storing token;
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Split the headers then grap token at index 1
            token = req.headers.authorization.split(' ')[1];
            // Validate the user token with the Secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Query User
            req.user = await User.findById(decoded.id).select('-pinCode');
        } catch (err) {
            console.error(err);
            res.status(401);
            throw new Error('Not Authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not Authorized, no token.');
    }

    next();
});


// Protect admin access
const admin = asyncHandler(async(req, res, next) => {

    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not Authorized as Admin.');
    }
});



export { protect, admin };