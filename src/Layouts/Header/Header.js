import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';


const Header = () => {
  const {user}= useContext(AuthContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link ><Link to='/courses'>courses</Link></Nav.Link>
          
          </Nav>
           <Nav>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>

            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;