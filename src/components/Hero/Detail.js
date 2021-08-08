import React from 'react'
import { Container, RecipeName, Img, Wrapper, RecipeH2, IngrediantList, IngrediantItem } from './detailElements'
import {Logo} from './HeroElements'
import logo from '../../images/logo2.svg'
class Detail extends React.Component {


    render() {

        const test = this.props.location.state.recipe;

        return (
            <Container>
                <Logo to="/" > <img src={logo} alt="logo" /></Logo>
                <Wrapper>
                    <Img src={test[1]} />
                    <RecipeName>{test[0]}</RecipeName>
                    <RecipeH2>Ingredients</RecipeH2>
                    <IngrediantList>
                        {test[2].map(ingredient => (
                            <IngrediantItem  >{ingredient.text}</IngrediantItem>
                        ))}



                    </IngrediantList>
                </Wrapper>
            </Container>
        );
    }
};


export default Detail;
