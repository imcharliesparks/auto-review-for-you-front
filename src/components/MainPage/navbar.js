import React, { Component, Fragment } from 'react';
import AuthService from '../Auth/authservice';
import './navbar.css';
import Media from 'react-media';
import HamburgerMenu from './hamburgermenu';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Auth = new AuthService();

const styles = {
  hamburgerStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
    padding: '40px'
  }
}

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalState: {
        isOpen: false,
        type: 'login'
      },
      navState: {
        isOpen: false,
      }

     }
  }

  signOut = () => {
    Auth.logout();
  };

  navToggler = () => {
    this.setState({ navState: { isOpen: !this.state.navState.isOpen }});
  }

  handleRenderNavItems = () => {
    if (this.props.isLoggedIn){
      return (
        <Navbar color="primary" expand="lg" light>
           <NavbarBrand className="text-white" href="/">auto review for you</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink className="text-white" href="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/MyReviews">
                  <i className="fas fa-newspaper"></i> My Reviews
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/Billing">
                  <i className="fas fa-money-bill-alt"></i> Billing
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/Settings">
                  <i className="fas fa-cogs"></i> Settings
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/login">
                <i className="fas fa-sign-out-alt"></i> Sign Out
                </NavLink>
              </NavItem>
            </Nav>
          
        </Navbar>
      )
    } else return (
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="text-white" href="/">auto review for you</NavbarBrand>
        <NavbarToggler onClick={this.navToggler} />
        <Collapse isOpen={this.state.navState.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
              <NavLink className="text-white" href="/">
                <i className="fas fa-home"></i> Home
              </NavLink>
            </NavItem>

            <NavItem >
              <NavLink className="text-white" href="/login">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  render() { 
    return (
      <div>
        <Navbar color="primary" light expand="md">
        <NavbarBrand className="text-white" href="/">auto review for you</NavbarBrand>
        <NavbarToggler onClick={this.navToggler} />
        <Collapse style={{textAlign: "left"}} isOpen={this.state.navState.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
                <NavLink className="text-white" href="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/MyReviews">
                  <i className="fas fa-newspaper"></i> My Reviews
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/Billing">
                  <i className="fas fa-money-bill-alt"></i> Billing
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/Settings">
                  <i className="fas fa-cogs"></i> Settings
                </NavLink>
              </NavItem>

              <NavItem >
                <NavLink className="text-white" href="/login">
                <i className="fas fa-sign-out-alt"></i> Sign Out
                </NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}
 
export default MainNavbar;
