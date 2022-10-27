import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import ReactTooltip from "react-tooltip";
import './Header.css'



const Header = () => {
    const[show, setShow] = useState(true)
  const {user, logOff}= useContext(AuthContext);

  const controlLogOff = () => {
        logOff()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar className='nav-style mt-3 '  expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none' to='/courses'>courses</Link></Nav.Link>
            
            <button onClick={()=>setShow(!show)}>{
                show?<button>white</button>:<button>dark</button>
            }</button>
          </Nav>
           <Nav>
                            
                    
                           <> {
                                user?.photoURL ? 
                                    <>
                                    <Button variant="light" onClick={controlLogOff}>Log out</Button>
                                        <Image data-tip data-for="registerTip"
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                
                                <ReactTooltip id="registerTip" place="top" effect="solid">
                                    {user?.displayName}
                                </ReactTooltip>
                                        
                                    </>
                                    :
                                    <>
                                        <Link to='/register'>Register</Link>
                                        <Link to='/login'>Login</Link>
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