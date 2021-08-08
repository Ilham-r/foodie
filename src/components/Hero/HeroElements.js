import styled from "styled-components"

import { Link } from "react-router-dom"
export const Container = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100%;
width:100%;
padding:0;
margin:0;
position:relative;


`
export const Logo = styled(Link)`

position:absolute;
display: flex;
height:60px;
width:300px;
top:20px;
left:50px;

@media screen and (max-width:768px){

 height:40px;
width:150px;
top:10px;
left:20px;
}
`
export const SearchWrap = styled.div`
height:60px;
display:flex;
position:absolute;
top:90px;
flex-direction:row;
justify-content:space-between;
width:480px;
padding: 20px;
@media screen and (max-width:768px){
  width:380px;
}
`
export const SearchInput = styled.input`

padding:8px;
width:70%;
border:none;
border-radius:4px;
`
export const Button = styled.button`
 background-color:#f7f373;
  display: inline-block;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 20px;
  padding: 0.5rem ;
  margin: 0.5rem 1rem;
  width: 7rem;
  color: #fff;
  font-size: 20px;

`
export const ResaultContainer = styled.div`
position:absolute;
top:240px;
display:flex;
flex-direction:column;
align-items:center;

@media screen and (max-width:768px){
    height:1100px;
}
@media screen and (max-width:768px){
    height:1300px;
}
`
export const ResaultWrapper = styled.div`

margin: 0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr ;
align-items:center;
grid-gap:16px;
padding:20px 0;

@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr ;

}
@media screen and (max-width:768px){
    grid-template-columns:1fr ;

}

`
