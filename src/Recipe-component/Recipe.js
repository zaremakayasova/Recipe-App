import React from 'react';
import './Recipe.styles.css';
import { FaRegCaretSquareRight } from 'react-icons/fa';

const Recipe = ({ recipe }) => {
    return (
        <div className='recipe'>
            <h1>{recipe.recipe.label} </h1>
           
            <h4>Calories: {recipe.recipe.calories}</h4>
            <ul>
                {
                    recipe.recipe.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
                <a href = {recipe.recipe.url}>
                        View Full Recipe
                        <FaRegCaretSquareRight className='icon'/>
                        </a>
            </ul>
            <img className='image' src={recipe.recipe.image} alt='recipe-image' />
        </div>
    );
};

export default Recipe;