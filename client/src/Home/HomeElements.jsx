import styled from "styled-components"
import BackGround from "../img/background.svg"
import { ReactComponent as BannerSvg } from "../img/banner.svg"

const vomitColor = "#FFFAA6"

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-position: 200px;
    background-size: cover;
    @media (max-width:1028px){
        background-position: 150px
    }
    @media (max-width:800px){
        background-position: 120px
    }
    @media (max-width:500px){
        background-position: 100%
    }
`
export const SearchContainer = styled.div`
    width: 40vw;
    height: 450px;
    position: absolute;
    left: 10vw;
    top: 35vh;
    @media (max-width:900px){
        width: 90vw;
    }
    @media (max-width:650px){
        top: 20vh;
    }
`
export const Title = styled.h1`
    color:black;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 5px;
    @media (max-width:650px){
        font-size: 2rem;
    }
`

export const Tagline = styled.h2`
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 5px;
    color: #0000a5;
    @media (max-width:650px){
        font-size: 1.1rem;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    @media (max-width:1400px){
        flex-direction: column;
    }
    @media (max-width:900px){
        flex-direction: row;
    }
    @media (max-width:650px){
        flex-direction: column;
    }
`

export const SearchInput = styled.input.attrs({ type: "text" })`
    width: 50%;
    min-width: 300px;
    height: 45px;
    font-size: 1.2rem;
    border-radius: 5px;
    border:none;
    box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -webkit-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -moz-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    margin-top: 15px;
    @media (max-width:650px){
        min-width: 200px;
    }
`

export const ZipInput = styled.input.attrs({ type: "number" })`
    width: 120px;
    height: 45px;
    font-size: 1.2rem;
    margin-left: 20px;
    border-radius: 5px;
    border:none;
    box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -webkit-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -moz-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    margin-top: 15px;
    @media (max-width:1400px){
        margin-left: 0;
    }
    @media (max-width:900px){
        margin-left: 10px;
    }
    @media (max-width:650px){
        margin-left: 0;
    }
`

export const SearchButton = styled.button`
    height: 45px;
    width: 100px;
    margin-left: 20px;
    border-radius: 25px;
    background-color: ${vomitColor};
    border:none;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -webkit-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -moz-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    z-index: 10;
    margin-top: 15px;
    @media (max-width:1400px){
        margin-left: 0;
    }
    @media (max-width:900px){
        margin-left: 10px;
    }
    @media (max-width:650px){
        margin-left: 0px;
        width: 150px;
    }

`

export const Banner = styled(BannerSvg)`
    position: absolute;
    right: 1vw;
    z-index: 1;
    width: 45vw;
    @media (max-width:900px){
        width: 40vw;
        display:none;
    }
`