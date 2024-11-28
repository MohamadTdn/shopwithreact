import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import "./Register.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <NavMenu />
      <div className="Register">
        <form action="#" id="register-form">
          <h4 className="register-form-title">Register</h4>
          <input className="name" type="text" placeholder="Enter Your Name" />
          <br />
          <input
            className="username"
            type="text"
            placeholder="Enter Your User Name"
          />
          <br />
          <input
            className="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="phone"
            type="number"
            placeholder="Enter Your Phone Number"
          />
          <br />
          <input
            className="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <br />
          <Button variant="success" type="submit">
            Register
          </Button>
          <h5 className="alert-message">
            Do you have an account ?
            <Button variant="secondary">
              <Link to={`/login`}>Login</Link>
            </Button>
          </h5>
        </form>
      </div>
      <Footer />
    </>
  );
}
