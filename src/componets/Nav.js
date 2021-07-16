import React, {useState} from 'react';
import { Link } from "@reach/router"
import "../App.css";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from "../images/travelpallogo.png"




const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar bg-light" id="navbar">
        <Container>        
          <NavbarBrand href="/"><img src={Logo} alt="travelpal" style={{width:"100px",height:"50px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
            <Link to="/"><NavLink><i className="fas fa-home"></i><span className="px-2">Home</span> </NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/rooms"><NavLink><i className="fas fa-door-open"></i> <span className="ml-2">Rooms</span></NavLink></Link>
            </NavItem>

            <NavItem>
            <Link to="/services"><NavLink><i className="fas fa-concierge-bell"></i> <span className="ml-2">Services</span> </NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>

      </Navbar>
    </div>
  );
}

    export default Navigation;
