import React from 'react'
import { Nav, Wrapper, Button, Link } from '../style/style'

export const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Nav.NavBrand>
          <Nav.NavBrandLink href='#'>
            <Nav.NavLogo />
            <Nav.NavLocus />
          </Nav.NavBrandLink>
        </Nav.NavBrand>
        <Nav.NavItems>
          <Nav.NavLinks>
            <Link href='#'>
              Home
            </Link>
          </Nav.NavLinks>
          <Nav.NavLinks>
            <Link href='#'>
              Contact
            </Link>
          </Nav.NavLinks>
          <Nav.NavLinks>
            <Link href='#'>
              Location
            </Link>
          </Nav.NavLinks>
          <Nav.NavLinks>
            <Link href='#'>
              About Us
            </Link>
          </Nav.NavLinks>
        </Nav.NavItems>
        <Button border>Log In</Button>
      </Nav>
    </Wrapper>
  )
}
