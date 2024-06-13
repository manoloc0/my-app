import React from 'react';
import './styles/nameMyCocktail.css'; // Import the CSS file for styling

const nameMyCocktail = ({ ingredients, cocktailName, setCocktailName }) => {
  const handleNameChange = (e) => {
    setCocktailName(e.target.value);
  };

  // Creates another component called Name my Cocktail
  // Has a subheading called Ingredients
  // Filters all of the possible ingredients to only htose that are checked. 
  // Maps those ingredients to have a unique key, and then includes the ingredient name. d
  return (
    <div className="name-my-cocktail">
      <h2>Name My Cocktail</h2>
      <input
        type="text"
        value={cocktailName}
        onChange={handleNameChange}
        placeholder="Enter cocktail name"
      />
      <h3>Ingredients</h3>
      <ul>
        {ingredients
          .filter(ingredient => ingredient.checked)
          .map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default nameMyCocktail;
