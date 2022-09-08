import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Store } from '../../Store/Store';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavbarBar() {

  const { state } = useContext(Store);
  const { cart } = state;
  return (

 
    <div>
         <Helmet>
    <title>Amazona</title>
    </Helmet>
       <header>
       <Navbar bg="dark" variant="dark">
       <Container>
       <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>

       </Container>

        </Navbar>
        
        
      </header>
    </div>
  )
}
