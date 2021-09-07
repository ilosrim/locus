import React from 'react'
import { Nav, Container, Button, Link } from '../style/style'

export const Navbar = () => {
  return (
    <Container>
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
    </Container>
  )
}
