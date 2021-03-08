import React, { useState } from 'react'
import {
    LoginContainer,
    LoginBannerContainer,
    LoginBanner, BannerTitle,
    LoginFormContainer,
    LoginInput,
    Form,
    LoginTitle,
    LoginInfo,
    LoginBtn,
    GoogleIcon,
    SeparationContainer,
    SeparationLine,
    BackButton,
    SwitchButton,
    ErrorMessage
} from "./LoginElements"

import { GlobalContext } from "../Context"
import { useContext } from "react"
import { login, signUp } from "../Api"

const Login = () => {
    const { page, setPage, setUser } = useContext(GlobalContext)

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "" })

    const [error, setError] = useState("")

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const loginAction = async () => {
        const response = await login(credentials)
        if (!response.success) setError(response.message)
        if (response.user) {
            setError("")
            setCredentials({ email: "", password: "", name: "" })
            setUser(response.user)
            setPage("home")
        }
    }

    const signUpAction = async () => {
        if (!validateEmail(credentials.email)) {
            setError("Provide a valid email")
            return
        }
        const response = await signUp(credentials)
        if (!response.success) setError(response.message)
        if (response.user) {
            setError("")
            setCredentials({ email: "", password: "", name: "" })
            setUser(response.user)
            setPage("home")
        }
    }

    const SwitchPage = () => {
        setError("")
        if (page === "login") setPage("signup")
        else setPage("login")
    }

    const inputs = page === "login" ? (
        <>
            <LoginInput placeholder="email" id="email" type="email" value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
            <LoginInput placeholder="password" id="password" type="password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
            <LoginBtn onClick={() => loginAction()}>Login</LoginBtn>
        </>
    ) : (
        <>
            <LoginInput placeholder="name" id="name" type="name" value={credentials.name} onChange={e => setCredentials({ ...credentials, name: e.target.value })} />
            <LoginInput placeholder="email" id="email" type="email" value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
            <LoginInput placeholder="password" id="password" type="password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
            <LoginBtn onClick={() => signUpAction()}>Sign Up</LoginBtn>
        </>
    )

    const errorElement = error ? <ErrorMessage>{error}</ErrorMessage> : ""


    return (
        <LoginContainer active={page === "login" || page === "signup"}>
            <BackButton onClick={() => setPage("home")}>Back</BackButton>

            <LoginBannerContainer>
                <LoginBanner />
                <BannerTitle>{page === "login" ? "Create a new account" : "Already have an account?"}</BannerTitle>
                <SwitchButton onClick={() => SwitchPage()}>{page === "login" ? "Sign Up" : "Login"}</SwitchButton>
            </LoginBannerContainer>

            <LoginFormContainer>
                <Form>
                    <LoginTitle>Welcome to OneBook :)</LoginTitle>
                    <LoginInfo>To keep connected with us please login with your personal information by email address and password</LoginInfo>
                    <LoginTitle style={{ textAlign: "center", fontSize: "2.3rem" }}>{page === "login" ? "LOGIN" : "SIGNUP"}</LoginTitle>
                    <GoogleIcon onClick={() => (window.location = "http://localhost:5000/api/auth/google")} />
                    <SeparationContainer>
                        <SeparationLine />
                        OR
                        <SeparationLine />
                    </SeparationContainer>
                    {errorElement}
                    {inputs}
                </Form>

            </LoginFormContainer>



        </LoginContainer>
    )
}

export default Login