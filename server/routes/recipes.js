import express from 'express';
import mongoose from 'mongoose';
import { Recipe } from '../models/Recipes.js';
import { getRecipes, createRecipe } from '../controllers/recipeController.js';

const router = express.Router();

// Routes for '/recipes/
router.get('/', getRecipes);

router.post('/', createRecipe);

export { router as recipeRouter };
