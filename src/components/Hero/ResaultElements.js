import styled from 'styled-components'

import { Link } from "react-router-dom"
export const RecipeCard = styled.div`
background-color:#fff;
display:flex;
flex-direction:column;
border-radius:20px 20px 0 0;
width:280px;
height:340px;
position:relative;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
}
`
export const RecipePic = styled.img`
height:80%;
width:100%;
border-radius:20px 20px 0 0;
display:flex;
align-self:center;
 

`
export const RecipeName = styled(Link)`
font-size:1.5rem;
align-self:center;
margin-top:10px;
margin-left:10px;
margin-right:10px;
text-decoration:none;
color:#000;
@media screen and (max-width:480px){
    font-size:1.2rem;
}
`

