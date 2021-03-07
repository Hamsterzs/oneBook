import React from 'react'
import { Navbar, Logo, Links, Link, AuthButton } from "./NavBarElements"

const NavBar = () => {
    return (
        <Navbar>
            <Logo />
            <Links>
                <Link active={true}>Home</Link>
                <Link>Services</Link>
                <Link>Job Posts</Link>
                <Link>Community</Link>
                <AuthButton>Login</AuthButton>
                <AuthButton>Button</AuthButton>
            </Links>
        </Navbar>
    )
}

export default NavBar