import styled from "styled-components"
import LogoImg from "../../img/logo.png"

const vomitColor = "#FFFAA6"

export const Navbar = styled.div`
    width:100vw;
    height:100px;
    display:flex;
    justify-content: space-between;
`
export const Logo = styled.div`
    width: 150px;
    height: 100px;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-left:20px;
`
export const Links = styled.nav`
    width: 55vw;
    min-width: 1000px;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
    @media(max-width:1200px){
        width: 80vw;
        min-width: 60vw;
    }
`
export const Link = styled.button`
    height: 45px;
    border-radius: 25px;
    border:none;
    background-color:${props => props.active ? vomitColor : "transparent"};
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-right: 20px;
    padding: 0px 25px;
    text-align: center;
    color: ${props => props.active ? "black" : "white"};
    &:hover{
        background-color:${vomitColor};
        color:black;
        cursor:pointer;
    }
    @media(max-width: 1000px){
        display:none;
    }
`

export const AuthButton = styled.button`
    height: 45px;
    border-radius: 25px;
    border: solid 2px white;
    background-color: transparent;
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-right: 20px;
    padding: 0px 40px;
    text-align: center;
    color: ${props => props.active ? "black" : "white"};
    &:hover{
        background-color:${vomitColor};
        color:black;
        cursor:pointer;
        border-color:${vomitColor};
    }
    @media(max-width:900px){
        font-size: 1rem;
        padding: 0px 15px;
        margin-right: 10px;
    }
   
`
