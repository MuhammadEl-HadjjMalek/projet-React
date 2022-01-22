import Bill from "../models/bill.model.js";
import asyncHandler from "express-async-handler";


// @desc    List all bill of logged user
// @route   /api/bill
// @access  Private|@LoggedUser & Admin
const listBill = asyncHandler(async(req, res) => {
    // List bill of the logged user: Future 
    const bills = await Bill.find({}).sort("-createdAt");

    res.json(bills);
});


// @desc    List single bill of logged user
// @route   /api/bill
// @access  Private|@LoggedUser & Admin
const getSingleBill = asyncHandler(async(req, res) => {

    const bill = await Bill.findById(req.params.id);

    res.json(bill);
})


export { listBill, getSingleBill };