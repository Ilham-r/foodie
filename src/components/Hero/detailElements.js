import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:auto;
width:100%;
padding:0;
margin:0;
`

export const Wrapper = styled.div`
padding:80px 0;
width:580px;
display:flex;
flex-direction:column;
align-items:center;
`

export const Img = styled.img`
width:300px;
height:300px;
self-align:center;

`
export const RecipeName = styled.h1`
font-weight:bold;
font-size:1.5rem;
align-self:center;
margin-top:50px;
color:#fff;
@media screen and (max-width:480px){
    font-size:1.2rem;
}
`
export const RecipeH2 = styled.h2`
font-size:1.3rem;
color:#fff;
font-weight:bold;
margin-bottom:6px;
@media screen and (max-width:480px){
    font-size:1.1rem;
}
`
export const IngrediantList = styled.ul`

align-items: left;
text-align: left;
list-style-type: circle;

`
export const IngrediantItem = styled.li`

font-size: 1.2rem;
padding:10px 10px;
`
