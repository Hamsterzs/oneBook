import styled from "styled-components"
import Banner from "../img/loginBanner.PNG"
import Google from "../img/google-logo.png"

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left: ${props => props.active ? "0%" : "100%"};
    transition: 1s;
    display: flex;
`
export const LoginBannerContainer = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: #FAFAFA;
    position: relative;
    @media(max-width:1000px){
        display:none;
    }
`
export const LoginBanner = styled.div`
    width: 80%;
    height: 60%;
    background-image:url(${Banner});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 10%;
    top: 40%;
    transform: translateY(-50%);
`

export const BannerTitle = styled.h1`
    font-size: 2.3rem;
    position:absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
`

export const LoginFormContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top: 50px;
    @media(max-width:1000px){
        width:100vw;
    }
    @media(max-width:850px){
        height: 90vh;
    }
    @media(max-width:500px){
        height: 100vh;
        margin:0;
    }
`
export const LoginInput = styled.input`
    border: none;
    height: 50px;
    width: 80%;
    border-bottom: solid 1px blue;
    margin-top:20px;
    font-size: 1.3rem;
    @media(max-width:400px){
        margin-top: 5px;
    }
`
export const Form = styled.div`
    width: 70%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:500px){
        width: 80%;
    }
`
export const LoginTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    letter-spacing: 1px;
    margin-left: 10%;
    @media(max-width:1480px){
        font-size: 2rem;
    }
    @media(max-width:1480px){
        margin-bottom:0px;
    }
`
export const LoginInfo = styled.p`
    font-size: 1.2rem;
    color:grey;
    margin-top: 20px;
    margin-left: 10%;
    @media(max-width:1480px){
        margin-bottom:0px;
    }
`
export const LoginBtn = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 20px;
    background-color: #FFE383;
    font-size: 1.5rem;
    border: none;
    margin-top: 50px;
    box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -webkit-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    -moz-box-shadow: 2px 1px 14px 1px rgba(0,0,0,0.39);
    cursor: pointer;
    @media(max-width:1480px){
        width: 100px;
        height: 40px;
        margin-top: 20px;
        font-size:1.3rem;
    }
    @media(max-width:400px){
        width: 80px;
        height: 40px;
        font-size:1.3rem;
    }
`
export const GoogleIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${Google});
    background-size: cover;
    cursor: pointer;
    margin-top: 20px;
    @media(max-width:1480px){
        width: 30px;
        height: 30px;
    }
    @media(max-width:400px){
        margin-top: 5px;
        width: 25px;
        height: 29px;
        margin-bottom:10px;
    }
`

export const SeparationContainer = styled.div`
    display: flex;
    width: 80%;
    height: 20px;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    color:#979797;
    @media(max-width:400px){
        margin-top: 0px;
    }
`
export const SeparationLine = styled.div`
    background-color:#979797;
    width: 40%;
    height: 2px;
`
export const BackButton = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color:white;
    position: absolute;
    left: 5vw;
    top: 5vh;
    z-index: 10;
    background: rgb(27,111,196);
    background: linear-gradient(90deg, rgba(27,111,196,1) 0%, rgba(36,75,186,1) 100%);
    cursor: pointer;
    @media(max-width:500px){
        left: 0px;
        top: 5px;
        width: 70px;
        height: 30px;
        font-size:1.2rem;
    }
`
export const SwitchButton = styled(BackButton)`
    width: 200px;
    height: 50px;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    display: ${props => props.extra ? "none" : "unset"};
    @media(max-width:1000px){
        display:unset;
        width: 100px;
        height: 40px;
        margin-top: 20px;
        font-size:1.3rem;
        position:relative;
        top: 0;
        left: 0;
        transform:none;
    }
    @media(max-width:400px){
        width: 80px;
        height: 40px;
        font-size:1.3rem;
    }
`
export const ErrorMessage = styled.p`
    color: red;
    font-size:1.2rem;
    margin-bottom: 0px;
    margin-top: 30px;
`