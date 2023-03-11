import { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
  const userID = useGetUserID();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/recipes', recipe);
      alert('Recipe created');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='create-recipe'>
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={handleChange} />
        <label htmlFor='ingredients'>Ingredients</label>
        <button onClick={addIngredient} type='button'>
          Add Ingredient
        </button>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type='text'
            name='ingredient'
            value={ingredient}
            onChange={(e) => handleIngredientChange(e, index)}
          />
        ))}
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          name='instructions'
          id='instructions'
          onChange={handleChange}
        ></textarea>
        <label htmlFor='imageUrl'>Image URL</label>
        <input
          type='text'
          id='imageUrl'
          name='imageUrl'
          onChange={handleChange}
        />
        <label htmlFor='cookingTime'>Cooking Time (minutes)</label>
        <input
          type='number'
          id='cookingTime'
          name='cookingTime'
          onChange={handleChange}
        />
        <button type='submit'>Create Recipe</button>
      </form>
    </div>
  );
};
export default CreateRecipe;
