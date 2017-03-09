import React from 'react';
import ReactDOM from "react-dom";

// Import navbar features
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

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

// Modal for Login
const LoginModal = React.createClass({
      getInitialState() {
         return {
            showModal: false,
            userName: "",
            password: ""
         };
      },

      close() {
          this.setState({ showModal: false });
      },

      open() {
        this.setState({ showModal: true });
      },
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      },
      checkCredentials() {
        // Put the Credentials verification here
      },
      render() {
        return (
          <div>
            <Button
              bsStyle="primary"
              onClick={this.open}>Login/Sign up
            </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Welcome to Is It Cancer!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Login</h3>
                  <form>
                    <h5>Email</h5>
                      <input
                        name="userName"
                        type="string"
                        className="wideInput"
                        value={this.state.userName}
                        onChange={this.handleInputChange} />
                    <br />
                     <h5>Password</h5>
                      <input
                        name="password"
                        type="password"
                        className="wideInput"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                  </form>
                  <br />
                  <Button id="pullRightButton"
                    bsStyle="primary"
                    onClick={this.checkCredentials}> Login
                  </Button>
                  <br />
                  <hr />
                  <h3>Don't have account?</h3>
                  <br />
                  <Button id="largeButtonWidth"
                    bsStyle="info"
                    bsSize="large"
                    onClick={this.open}> Sign up
                  </Button>
                   {/* TODO: Add some sign up functionality */}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
});

ReactDOM.render(navbarInstance, document.getElementById("staticNavbar"));
ReactDOM.render(<LoginModal />, document.getElementById("loginNav"));

