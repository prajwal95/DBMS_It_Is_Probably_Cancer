import React from 'react';
import ReactDOM from "react-dom";

// Import navbar features
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" id="siteName">Is It Cancer? ... Probably</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Foods</NavItem>
        <NavItem eventKey={2} href="#">Log</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem id="loginNav"></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

var loggedIn = false;

function login() {
    console.log("Hello World!");

    // Bring up modal for login
    LoginModal.open();

    function checkCredentials() {
        // Return login modal
        loggedIn = true;
    }
    function changeToAccounts() {
        if(loggedIn) {
            var accountDropdown = (
                <Nav id="accounsAndLogin">
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            );
          ReactDOM.render(accountDropdown, document.getElementById("accountsAndLogin"));
          return accountDropdown;
        }
    }
    function changeToLogin() {
        if(!loggedIn) {
            var loginInNavbar = (
                <Nav id="accountsAndLogin" pullRight>
                    <NavItem eventKey={1} onClick={ login }>Login</NavItem>
                </Nav>
            )
        }

    }
};

const LoginModal = React.createClass({
      getInitialState() {
         return { showModal: false };
      },

      close() {
          this.setState({ showModal: false });
      },

      open() {
        this.setState({ showModal: true });
      },

      render() {
        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );

        return (
          <div>
            <Button
              bsStyle="primary"
              onClick={ this.open }>    Login/Sign up
            </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Login or Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Login</h4>
                //Handle inputs here

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
});


// ReactDOM.render(login, document.getElementById("login"));
ReactDOM.render(navbarInstance, document.getElementById("staticNavbar"));
ReactDOM.render(<LoginModal />, document.getElementById("loginNav"));

