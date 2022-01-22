import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import billRoutes from "./routes/bill.route.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

// Configurations
dotenv.config();
connectDB()


const app = express();

// Enable express body parser
app.use(express.json());
// Enable cors globally
app.use(cors());

// Register api endpoints
app.use("/api/bills", billRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)