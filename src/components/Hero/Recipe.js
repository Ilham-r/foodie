import React from 'react'
import { RecipeCard, RecipePic, RecipeName } from './ResaultElements'
function Recipe(props) {
    return (
        <>
            <RecipeCard>
                <RecipePic src={props.src} />

                <RecipeName to={{ pathname: `/detail/${props.name}`, state: { recipe: [props.name, props.src, props.ingredients] } }}> {props.name}</RecipeName>

            </RecipeCard>

        </>
    )
}

export default Recipe
