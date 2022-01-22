import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new User
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    // Grab body Request
    const { phoneNo, pinCode } = req.body;
    // Check if user already exist
    const userExist = await User.findOne({ phoneNo });
    if (userExist) {
        res.status(400);
        throw new Error("A user with this phone number already exists.");
    }
    // Create the new user
    const newUser = await User.create({
        phoneNo,
        pinCode,
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            phoneNo: newUser.phoneNo,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data.");
    }
});

// @desc    Auth user & Get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    // Grab body Request
    const { phoneNo, pinCode } = req.body;
    // Request user in DB
    const user = await User.findOne({ phoneNo });
    // Check if user exist and is valid
    if (user && (await user.matchpinCode(pinCode))) {
        res.send({
            _id: user._id,
            phoneNo: user.phoneNo,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid PIN Code.");
    }
});

// @desc    Get all users
// @route   /api/users
// @access  Private|Admin
const getUsers = asyncHandler(async(req, res) => {
    // Request to DB all users
    const users = await User.find({}).select('-pinCode');
    // Send response in JSON format
    res.json(users);
});

// @desc    Get User by Id
// @route   /api/users/:id
// @access  Private|Admin
const getUserById = asyncHandler(async(req, res) => {
    // Get user by the id with the req.params
    const user = await User.findById(req.params.id).select("-pinCode");

    // Check if user is there and valid id
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found.");
    }
});

// @desc    Delete a user
// @route   /api/users/:id
// @access  Private|Admin
const deleteUser = asyncHandler(async(req, res) => {
    // Get the user
    const user = await User.findById(req.params.id);

    if (user) {
        user.remove();
        res.status(200).json({ message: "User has been successfully deleted. " });
    } else {
        res.status(404);
        throw new Error("User not found.");
    }
});

// @desc    Update a user
// @route   PUT /api/users/profile
// @access  Private
const updateUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);

    const { phoneNo, pinCode, isAdmin } = req.body;

    if (user) {
        if (isAdmin != user.isAdmin) {
            user.isAdmin = isAdmin;
        } else if (pinCode) {
            user.pinCode = pinCode;
        }

        user.phoneNo = phoneNo || user.phoneNo;

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            phoneNo: updatedUser.phoneNo,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(400);
        throw new Error("User update has failed.");
    }
});


// @desc    Update a user by Id
// @route   PUT /api/users/:id
// @access  Private|Admin
const updateUserById = asyncHandler(async(req, res) => {

    const user = await User.findById(req.params.id);

    const { phoneNo, pinCode, isAdmin, isStaff } = req.body;

    if (user) {
        if (isAdmin != user.isAdmin) {
            user.isAdmin = isAdmin;
        } else if (pinCode) {
            user.pinCode = pinCode;
        }

        user.phoneNo = phoneNo || user.phoneNo;

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            phoneNo: updatedUser.phoneNo,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(400);
        throw new Error("User update has failed.");
    }
});

export {
    registerUser,
    authUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    updateUserById
};