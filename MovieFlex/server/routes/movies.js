import express from "express";
import Movie from "../models/Movie.js"; // Import your Movie model

const router = express.Router();

// GET /api/movies - Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find(); // Fetch all movies from the database
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching movies" });
  }
});

// POST /api/movies - Create a new movie
router.post("/", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating movie" });
  }
});

// // ... other routes for updating, deleting, etc.

export default router;
