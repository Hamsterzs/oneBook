import React from 'react'
import { Navbar, Logo, Links, Link, AuthButton } from "./NavBarElements"

const NavBar = ({ setPage }) => {
    return (
        <Navbar>
            <Logo />
            <Links>
                <Link active={true}>Home</Link>
                <Link>Services</Link>
                <Link>Job Posts</Link>
                <Link>Community</Link>
                <AuthButton onClick={() => setPage("login")}>Login</AuthButton>
                <AuthButton onClick={() => setPage("signup")}>Signup</AuthButton>
            </Links>
        </Navbar>
    )
}

export default NavBar