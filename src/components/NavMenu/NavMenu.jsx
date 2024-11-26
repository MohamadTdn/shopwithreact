import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

export default function NavMenu() {
  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="logo" src="/images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <NavLink
                className={(link) =>
                  link.isActive ? "nav-link active" : "nav-link"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={"nav-link"} to={"/blog"}>
                Blog
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={"nav-link"} to={"/products"}>
                Products
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={"nav-link"} to={"/register"}>
                register
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <FaSearch />
            <IoBag />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
