import express from 'express';

import {
  getRecipes,
  createRecipe,
  saveRecipe,
  getSavedRecipesIds,
  getSavedRecipes,
} from '../controllers/recipeController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Routes for '/recipes/
router.get('/', getRecipes);

router.post('/', verifyToken, createRecipe);

router.put('/', verifyToken, saveRecipe);

router.get('/savedRecipes/ids/:userID', getSavedRecipesIds);

router.get('/savedRecipes/:userID', getSavedRecipes);

export { router as recipeRouter };
