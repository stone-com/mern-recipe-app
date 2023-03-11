import asyncHandler from 'express-async-handler';
import { Recipe } from '../models/Recipes.js';

export const getRecipes = asyncHandler(async (req, res) => {
  try {
    const response = await Recipe.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export const createRecipe = asyncHandler(async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
