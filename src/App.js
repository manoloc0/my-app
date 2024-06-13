import React, { useState, useEffect } from 'react';
import Ingredients from './components/cocktail-creator/ingredients';
import NameMyCocktail from './components/cocktail-creator/nameMyCocktail';
import './App.css'; // Import the CSS file for styling

// App is a functional component.
const App = () => {
  // Sets intial ingredients with unique ID's and relevant data for our app. 
  const initialIngredients = [
    { id: 1, name: 'Vodka', checked: false, type: 'Liquor' },
    { id: 2, name: 'Rum', checked: false, type: 'Liquor' },
    { id: 3, name: 'Whiskey', checked: false, type: 'Liquor' },
    { id: 4, name: 'Tequila', checked: false, type: 'Liquor' },
    { id: 5, name: 'Gin', checked: false, type: 'Liquor' },
    { id: 6, name: 'Peach Schnapps', checked: false, type: 'Liqueur' },
    { id: 7, name: 'Triple Sec', checked: false, type: 'Liqueur' },
    { id: 8, name: 'Orange Juice', checked: false, type: 'Juice' },
    { id: 9, name: 'Cranberry Juice', checked: false, type: 'Juice' },
    { id: 10, name: 'Limes', checked: false, type: 'Garnish' },
    { id: 11, name: 'Mint', checked: false, type: 'Garnish' },
  ];

  // Hook. intakes ingredients and sets those ingredients. Uses persistent storage by getting item with key 'ingredients', or just the initail ingredients if there are none. 
  const [ingredients, setIngredients] = useState(
    JSON.parse(sessionStorage.getItem('ingredients')) || initialIngredients
  );

  // Hook. Has var cocktailName and setCocktailName to change that var. Updates cocktailName  with local storage. Starts with empty string. 
  const [cocktailName, setCocktailName] = useState(
    sessionStorage.getItem('cocktailName') || ''
  );

  // Hook. useEffect addresses sideEffects. updates ingredients in local storage. 
  // Syntax: useEfect(() => {...})


  
  useEffect(() => {
    sessionStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  useEffect(() => {
    sessionStorage.setItem('cocktailName', cocktailName);
  }, [cocktailName]);

  return (
    <div className="app-container">
      <div>
      <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      <div>
        <NameMyCocktail
          ingredients={ingredients}
          cocktailName={cocktailName}
          setCocktailName={setCocktailName}
        />
      </div>
    </div>
  );
};

export default App;
