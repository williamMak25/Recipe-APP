import React from "react";
import './recipe.css'
const Recipe = ({title,image,ingredients}) => {

    return(
        <>
        <div className="recipe__container">
            <h1>{title}</h1>
            <ul className="ingredients">
                <h2>Ingredients</h2>
                {
                    ingredients.map((ingredient)=>{
                        return <li>{ingredient.text}</li>
                    })
                }
            </ul>
            <img src={image} alt=""/>
        </div>
        </>
    )
}

export default Recipe;