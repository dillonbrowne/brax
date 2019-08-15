import React from "react"
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
  DropdownItem } from 'reactstrap';
import Container from "reactstrap/es/Container"

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){

    return (
      <div className='bg-primary py-2'>
        <Container>
          <div className='text-right'><h4 className='text-white'>Wise Choice Daily</h4></div>
        </Container>

      </div>

    )

  }
  }

export default Header
