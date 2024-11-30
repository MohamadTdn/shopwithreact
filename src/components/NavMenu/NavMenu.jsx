import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { memo } from "react";
import Cart from "../Cart/Cart";

export default memo(function NavMenu() {
  const [isShowCart, setIsShowCart] = useState(false);

  const cartShowHandler = () => {
    setIsShowCart(false);
  };

  return (
    <>
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
                  <FaHome />
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={(link) =>
                    link.isActive ? "nav-link active" : "nav-link"
                  }
                  to={"/blog"}
                >
                  <PiNotebookFill />
                  Blog
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={(link) =>
                    link.isActive ? "nav-link active" : "nav-link"
                  }
                  to={"/products"}
                >
                  <MdOutlineProductionQuantityLimits />
                  Products
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={(link) =>
                    link.isActive ? "nav-link active" : "nav-link"
                  }
                  to={"/register"}
                >
                  <CiLogin />
                  Register
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <FaSearch />
              <IoBag onClick={() => setIsShowCart(true)} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isShowCart ? <Cart onClose={cartShowHandler} /> : null}
    </>
  );
});
