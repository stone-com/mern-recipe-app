import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/saved-recipes' element={<SavedRecipes />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
