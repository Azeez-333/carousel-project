import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Git from './icons/Git.svg'
import Linkedin from './icons/Linkedin.svg'
import Meta from './icons/Meta.svg'
import Twitter from './icons/Twitter.svg'
import Whatsapp from './icons/Whatsapp.svg'

const Navigation = () => {
  return (
    <div>
        <Navbar expand="lg" bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={Meta}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{''}AZEEZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='icons' style={{justifyContent : 'end'}}>
            <Nav style={{gap:'1rem', alignItems:'center'}}>
                <img src={Whatsapp} alt='Whatsapp'></img>
                <img src={Twitter} alt='Twitter'></img>
                <img src={Linkedin} alt='Linkedin'></img>
                <img src={Git} alt='Git'></img>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation