import React from "react";
import "../Register/Register.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <NavMenu />
      <div className="Register">
        <form action="#" id="register-form">
          <h4 className="register-form-title">Login</h4>
          <input
            className="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <br />
          <Button variant="success" type="submit">
            Login
          </Button>
          <h5 className="alert-message">
            Dont have an account ?
            <Button variant="secondary">
              <Link to={`/register`}>Register</Link>
            </Button>
          </h5>
        </form>
      </div>
      <Footer />
    </>
  );
}
