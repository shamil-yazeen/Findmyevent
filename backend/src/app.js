import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import eventRoutes from "./routes/eventRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import paymentRoutes from "./routes/paymentRoutes.js";




const app = express();

/* ---------------- SECURITY MIDDLEWARE ---------------- */

// Helmet sets secure HTTP headers
app.use(helmet());

// Strict CORS (adjust frontend URL later)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// Rate limiting (global)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false
});

app.use(limiter);

/* ---------------- BODY PARSER ---------------- */

// For normal JSON routes
app.use(express.json({ limit: "10kb" }));

app.use("/api", eventRoutes);
app.use("/api", paymentRoutes);

/* ---------------- HEALTH CHECK ---------------- */

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use(errorHandler);

export default app;