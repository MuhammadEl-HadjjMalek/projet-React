import mongoose from "mongoose";

const billSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId },
    to: { type: String },
    from: { type: String },
    addressTo: { type: String },
    addressFrom: { type: String },
    agency: { type: String },
    cost: { type: Number },
    consumption: { type: Number },
    deposit: { type: Number, default: 0 },
    isPaid: { type: Boolean },
    paidBy: { type: String },
}, { timestamps: true });

const Bill = mongoose.model("Bill", billSchema);

export default Bill;