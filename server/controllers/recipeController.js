import asyncHandler from 'express-async-handler';
import { Recipe } from '../models/Recipes.js';
import { User } from '../models/Users.js';

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

export const saveRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.body.recipeID);
  const user = await User.findById(req.body.userID);
  try {
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error);
  }
});

export const getSavedRecipesIds = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    res.json(error);
  }
});

export const getSavedRecipes = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.body.userID);
    const savedRecipes = await Recipe.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (error) {
    res.json(error);
  }
});
