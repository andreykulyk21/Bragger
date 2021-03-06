import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { instanceHasToken } from "../api/Api";

console.log(instanceHasToken)

const Styles = styled.div`
  .navbar {
    background-color: #3399ff;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;

    &:hover {
      color: #bbb;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Bragger</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {!instanceHasToken && (
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">Login</Link>
                            </Nav.Link>
                        </Nav.Item>
                    )}
                    {instanceHasToken && (<Nav.Item>
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                    </Nav.Item>)}
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
