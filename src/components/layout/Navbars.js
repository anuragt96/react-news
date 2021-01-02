import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <Navbar  bg="info" variant="dark" className="d-inline-block align-top">
            <Navbar.Brand href="#home">
            <span className="header"> <i class="fas fa-rocket"></i> React News App</span>
            </Navbar.Brand>
        </Navbar>
        
    )
}

export default Navbars;
