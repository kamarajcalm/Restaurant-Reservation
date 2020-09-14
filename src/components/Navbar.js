import React, { useState } from 'react';
import './Form.css';
import Form from './Form';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import fire from '../Fire';
import firebase from 'firebase';

const NavbarC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
   const handleLogout =() =>{
    fire.auth().signOut();
   }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand onClick={()=>props.setPage(0)}><p>MasalaCafe</p></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={()=>props.setPage(1)}>My Reservations</NavLink>
            </NavItem>
           
          
          </Nav>
          <NavbarText> <button onClick={handleLogout}>LogOut</button></NavbarText>

        </Collapse>
        
      </Navbar   >
      
    </div>
  );
}

export default NavbarC;