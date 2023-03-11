import express from 'express';
import mongoose from 'mongoose';
import { Recipe } from '../models/Recipes.js';
import {
  getRecipes,
  createRecipe,
  saveRecipe,
  getSavedRecipesIds,
  getSavedRecipes,
} from '../controllers/recipeController.js';

const router = express.Router();

// Routes for '/recipes/
router.get('/', getRecipes);

router.post('/', createRecipe);

router.put('/', saveRecipe);

router.get('savedRecipes/ids', getSavedRecipesIds);

router.get('/savedRecipes', getSavedRecipes);

export { router as recipeRouter };
