import React, { useState } from 'react';
import './styles/ingredients.css'; // Import the CSS file for styling

// Specify const Ingredients, which intakes ingredients and setIngredients as props.
// contains a sortOption and setSortOption as hook. Intiailzes default state ''. 
const Ingredients = ({ ingredients, setIngredients }) => {
  const [sortOption, setSortOption] = useState('');

  /*
  handleCheckboxChange. Inputs id, sets ingredients to be checked or unchecked.
  creates const (like a var baseically, but isn't actually a variable)
  "maps", that is, does a javascript iteration through all elements of ingredients, 
  and creates an array called newIngredients.
  for each iteration, if the newIngredient matches the id in the prop, returns a thing-- 
  an expanded ingredient, and reverses the checked value (i.e., checks the box.)
  After all iteration, uses hook to set ingredients with newIngredients as the prop. 

  */
  const handleCheckboxChange = (id) => {
    const newIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        return { ...ingredient, checked: !ingredient.checked };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  /*
  handleSortingOptionChange Passes in an event (in this case, a radio button click)
  Passes in that event target value, which is either "selected" or "type", meaning
  the potential sort criteria. Uses hook function setSortOption to update Sort Option. 
  */

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };


  /*
  sortedIngredients
  // Suntax: const sortedIngredients = (() => {...})(). This defines a function and immediately executes it
  // Checks if sortOption is 'selected' or 'type', then orders them using a fancy syntax.
  // returns ingredietns if neither sortOption is selected.
  */

  const sortedIngredients = (() => {
    if (sortOption === 'selected') {
      return [...ingredients].sort((a, b) => b.checked - a.checked);
    }
    if (sortOption === 'type') {
      return [...ingredients].sort((a, b) => a.type.localeCompare(b.type));
    }
    return ingredients;
  })();

  //Updates HTML. Has class names for CSS.
  // Creates a div with heading Ingredients. 
  // Then another div, which contains a input "container" for radio button for selected and type. Each has a "label" to label the radio buttons. 
  // Upon clicking of either radio button, handleSortingOptionChange occurs using onChange. 
  // Then a table is formed with class name ingredients-table. Contains ingredients
  return (
    <div>
      <h2>Ingredients</h2>
      <div className="sort-options">
        <label>Sort by:</label>
        <input
          type="radio"
          value="selected"
          checked={sortOption === 'selected'}
          onChange={handleSortOptionChange}
        />
        Selected
        <input
          type="radio"
          value="type"
          checked={sortOption === 'type'}
          onChange={handleSortOptionChange}
        />
        Type
      </div>
      <div className="ingredients-table">
        {sortedIngredients.map((ingredient) => (
          <div key={ingredient.id} className="ingredient-row">
            <input
              type="checkbox"
              checked={ingredient.checked}
              onChange={() => handleCheckboxChange(ingredient.id)}
            />
            <span className="ingredient-name">{ingredient.name}</span>
            <span className="ingredient-type">{ingredient.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
