import express from "express";
import movieRoutes from "./movies.js"; // Corrected import path

const router = express.Router();

router.use("/movies", movieRoutes);

export default router;
