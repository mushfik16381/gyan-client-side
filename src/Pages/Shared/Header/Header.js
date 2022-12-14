import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import Form from 'react-bootstrap/Form';
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-item">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/Faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
            <Nav className='d-flex align-items-center justify-content-between me-4 toggle'>
              <FaSun></FaSun>
              <Form className='text-center p-1'>
                <Form.Check 
                  type="switch"
                  id="custom-switch">
                </Form.Check>
              </Form>
              <FaMoon></FaMoon>
          </Nav>
          <Nav >
            {
              user?.uid ?
                <button className='log-out' onClick={logOut}>Log Out</button>
              :
              <>
                <Nav.Link as={Link} to="/login"><Button variant="outline-primary">Login</Button></Nav.Link>
                <Nav.Link as={Link} to="/register"><Button variant="outline-secondary">Register</Button></Nav.Link>
              </>
            }
          </Nav>
          <Nav>
            <div className='user-img'><OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
            <Nav.Link >{user?.photoURL ?
              <Image style={{height:'30px'}} roundedCircle 
              src={user.photoURL}></Image>
              : <FaUser></FaUser>
            }</Nav.Link>
          </OverlayTrigger></div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;