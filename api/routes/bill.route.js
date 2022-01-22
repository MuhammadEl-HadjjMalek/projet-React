import express from "express";
import { getSingleBill, listBill } from "../controllers/bill.controller.js";


const router = express.Router();

router.route("/").get(listBill);
router.route("/:id").get(getSingleBill);

export default router;