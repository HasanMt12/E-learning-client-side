import React, { useContext, useState } from 'react';
import {  Button, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import ReactTooltip from "react-tooltip";
import './Header.css'






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
            

    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light" className='mt-4  mx-4 rounded-5'>
      <Container >
        <Navbar.Brand href="/"><img src="https://i.postimg.cc/QNyp2f5H/download-removebg-preview.png" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-light fw-bold fs-5' href="/blog">Blog</Nav.Link>
            <Nav.Link className='text-light fw-bold fs-5' href="/FAQ">FAQ</Nav.Link>
            <Nav.Link className='text-light fw-bold fs-5 me-2' href="/courses">courses</Nav.Link>
           
            <input type="checkbox" id="check1" class="toggle"/>
                        <label for="check1"></label>

                        
          </Nav>
          <Nav>
                  <> {
                                user?.photoURL ? 
                                    <>
                                    <Nav.Link className='text-light fw-bold fs-5 me-2' onClick={controlLogOff}>Log out</Nav.Link>
                                        <Image data-tip data-for="registerTip"
                                    style={{ height: '42px' ,margin:'2px'}}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                
                                <ReactTooltip id="registerTip" place="top" effect="solid">
                                    {user?.displayName}
                                </ReactTooltip>
                                        
                                    </>
                                    :
                                    <>
                                      <Nav.Link className='text-light fw-bold fs-5' href="/register">Sign Up</Nav.Link>
                                      <Nav.Link className='text-light fw-bold fs-5' href="/login">Sign In</Nav.Link>
                                        
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