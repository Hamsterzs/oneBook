import React from 'react'
import {

    HomeContainer,
    SearchContainer,
    Title, Tagline,
    InputsContainer,
    SearchInput,
    ZipInput,
    SearchButton,
    Banner

} from "./HomeElements"

import Navbar from "./NavBar"

const Home = () => {
    return (
        <HomeContainer>
            <Navbar />

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