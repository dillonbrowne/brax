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
  Row,
  Col,} from 'reactstrap';
import Container from "reactstrap/es/Container"

class Footer extends React.Component {
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
          <Row>
            <Col>
          <Navbar color="primary" dark expand="md">

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto mr-auto' navbar>
                <NavItem>
                  <NavLink href="https://wisechoicedaily.com/privacy.html">Privacy Information</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://wisechoicedaily.com/terms.html">Terms of Service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://wisechoicedaily.com/cookies.html">Cookie Use</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <span>
                Copyright © Raw Media Marketing 2019. All Rights Reserved.
              </span>

            </Col>
          </Row>
        </Container>

      </div>

    )

  }
}

export default Footer
