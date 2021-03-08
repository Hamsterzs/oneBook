import React from 'react'
import { GlobalContext } from "../Context"
import { useContext } from "react"
import {

    HomeContainer,
    SearchContainer,
    Title, Tagline,
    InputsContainer,
    SearchInput,
    ZipInput,
    SearchButton,
    Banner,
    UserInfo,
    Logout

} from "./HomeElements"

import Navbar from "./NavBar"
import { signOut } from "../Api"

const Home = () => {
    const { page, setPage, user, setUser } = useContext(GlobalContext)

    const logout = async () => {
        const response = await signOut()
        console.log(response);
        setUser({})
    }

    const userInfo = user.email ? (
        <UserInfo>
            Hello {user.name}
            <Logout onClick={() => logout()}>Logout</Logout>
        </UserInfo>
    ) : ""

    return (
        <HomeContainer active={page === "home"}>
            <Navbar setPage={setPage} />

            {userInfo}

            <SearchContainer>
                <Title>One Book Home Services</Title>

                <Tagline>Just being of service makes us happy!</Tagline>

                <InputsContainer>
                    <SearchInput placeholder="Search for a service"></SearchInput>
                    <ZipInput placeholder="Zip Code"></ZipInput>
                    <SearchButton>Search</SearchButton>
                </InputsContainer>

            </SearchContainer>

            <Banner />

        </HomeContainer>
    )
}

export default Home