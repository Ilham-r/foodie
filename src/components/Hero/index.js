import React, { useState, useEffect } from 'react'
import { Container, Logo, SearchWrap, SearchInput, Button, ResaultContainer, ResaultWrapper } from './HeroElements'
import logo from '../../images/logo2.svg'
import Recipe from './Recipe'
function Hero() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('juice');
  const [recipes, setRecipes] = useState([]);
  const API = "https://edamam-recipe-search.p.rapidapi.com/search?q="
  const KEY= "9cadb67088mshf449da1695db223p1ee60djsndba3ce50f012"
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  const getRecipes = async () => {
    const response = await fetch(API + query, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key":KEY,
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
      }
    });
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <>
      <Container>
        <Logo to="/"> <img src={logo} alt="logo" /></Logo>
        <SearchWrap >

          <SearchInput value={search} onChange={updateSearch} />
          <Button type='submit' onClick={getSearch}>Search</Button>

        </SearchWrap>



        <ResaultContainer>
          <ResaultWrapper>

            {recipes.map(recipe => (

              <Recipe key={recipe.recipe.label} name={recipe.recipe.label} src={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />

            ))};


          </ResaultWrapper>
        </ResaultContainer>
      </Container>

    </>
  )
}

export default Hero
