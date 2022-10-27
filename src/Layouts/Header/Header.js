import React, { useContext, useState } from 'react';
import {  Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import ReactTooltip from "react-tooltip";
import './Header.css'
import logo from '../../assets/logo.png'



const Header = () => {
    // const[show, setShow] = useState(true)
  const {user, logOff}= useContext(AuthContext);

  const controlLogOff = () => {
        logOff()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mt-4 ms-2 me-2'>
      <Container >
        <Navbar.Brand href="/"><img src="https://i.postimg.cc/nz54kNzq/lg.png" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/FAG">FAQ</Nav.Link>
            <Nav.Link href="/courses">courses</Nav.Link>
           
            <input type="checkbox" id="check1" class="toggle"/>
                        <label for="check1"></label>
          </Nav>
          <Nav>
                  <> {
                                user?.photoURL ? 
                                    <>
                                    <Nav.Link variant="light" onClick={controlLogOff}>Log out</Nav.Link>
                                        <Image data-tip data-for="registerTip"
                                    style={{ height: '25px' ,margin:'2px'}}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                
                                <ReactTooltip id="registerTip" place="top" effect="solid">
                                    {user?.displayName}
                                </ReactTooltip>
                                        
                                    </>
                                    :
                                    <>
                                      <Nav.Link href="/register">SignUp</Nav.Link>
                                      <Nav.Link href="/login">SignIn</Nav.Link>
                                        
                                    </>
                            }


                        </>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
        </div>
    );
};

export default Header;