import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function App() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='abc' to='/about'>About</Link>
            <Link className='abc' to='/contact'>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    </div>
  )
}

export default App
