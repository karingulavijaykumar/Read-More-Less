// Style your elements here

import styled from "styled-components"

export const MainContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#ffffff;
background-size:cover;
height:100vh;

`
export const MainHeading=styled.h1`
font-family:"Roboto";
font-size:32px;
font-weight:500;
color:#1e293b;
`
export const MainParagraph=styled.p`
font-size:22px;
font-family:"Roboto";
color:#334155;
`

export const ReactImage=styled.img`
height:40vh;
width:40%;

`

export const Text=styled.p`
font-family:"Roboto";
font-size:16px;
width:40%;
white-space: pre-wrap;

`
export const Button=styled.button`
background-color: #1f81ff;
height:36px;
width:136px;
color:#ffffff;
border-radius:8px;
cursor: pointer;
outline:none;
border:none;
`