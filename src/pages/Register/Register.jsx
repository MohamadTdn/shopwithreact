import React from "react";
import "./Register.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import { useFormik } from "formik";
import signUpSchema from "../../../validator/validator";
import api from "../../Axios/Config";

export default function Register() {
  const form = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      api
        .post("/users", {
          id: crypto.randomUUID(),
          name: values.name,
          username: values.username,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
        .then((res) => {
          if (res.status === 201) {
            alert('user added successfully')
          }
        });
    },
  });

  return (
    <>
      <NavMenu></NavMenu>
      <div className="Register">
        <form onSubmit={form.handleSubmit} action="#" id="register-form">
          <h4 className="register-form-title">Register</h4>
          <input
            className="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={form.handleChange}
            value={form.values.name}
          />
          <br />
          {form.touched.name && form.errors.name ? (
            <h5>{form.errors.name}</h5>
          ) : null}
          <input
            className="username"
            type="text"
            placeholder="Enter Your User Name"
            name="username"
            onChange={form.handleChange}
            value={form.values.username}
          />
          <br />
          {form.touched.username && form.errors.username ? (
            <h5>{form.errors.username}</h5>
          ) : null}
          <input
            className="email"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={form.handleChange}
            value={form.values.email}
          />
          <br />
          {form.touched.email && form.errors.email ? (
            <h5>{form.errors.email}</h5>
          ) : null}
          <input
            className="phone"
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={form.handleChange}
            value={form.values.phone}
          />
          <br />
          {form.touched.phone && form.errors.phone ? (
            <h5>{form.errors.phone}</h5>
          ) : null}
          <input
            className="password"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
          />
          <br />
          {form.touched.password && form.errors.password ? (
            <h5>{form.errors.password}</h5>
          ) : null}
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
      <Footer></Footer>
    </>
  );
}
