import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar';
import '../index.css';
import axios from 'axios';

const SignupForm = ({ errors, touched, values, status }) => {
  const [supUsers, setSupUsers] = useState([]);

  useEffect(() => {
    status && setSupUsers(supUser => [...supUser, status]);
  }, [status]);

  return (
    <>
      <NavBar />
      <div className="fnu-signup-form-box">
        <h1 className="fnu-signup-form-title">Create Your New Account</h1>
        <Form className="fnu-signup-form">
          <div className="fnu-signup-inputs">
            <Field
              className="fnu-signup-input"
              type="text"
              name="firstname"
              placeholder="first name"
              value={values.firstname}
            />
            <Field
              className="fnu-signup-input"
              type="text"
              name="lastname"
              placeholder="last name"
              value={values.lastname}
            />
            <Field
              className="fnu-signup-input"
              type="text"
              name="username"
              placeholder="email address as your user name"
              value={values.username}
            />
            <Field
              className="fnu-signup-input"
              type="text"
              name="password"
              placeholder="password"
              value={values.password}
            />
          </div>
          <div>
            <button className="fnu-signup-create-button">
              Click to sign up
            </button>
          </div>
          <Link to="/login">
            <div>
              <button className="fnu-signup-login-button">
                Log in if you have an account already
              </button>
            </div>
          </Link>
          <div className="fnu-alert-message-boxes">
            {touched.firstname && errors.firstname && (
              <strong className="fnu-alert-message">{errors.firstname}</strong>
            )}
            {touched.lastname && errors.lastname && (
              <strong className="fnu-alert-message">{errors.lastname}</strong>
            )}
            {touched.username && errors.username && (
              <strong className="fnu-alert-message">{errors.username}</strong>
            )}
            {touched.password && errors.password && (
              <strong className="fnu-alert-message">{errors.password}</strong>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ supUsers }) {
    return {
      firstname: supUsers || '',
      lastname: '',
      username: '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('*Please enter your firstname!!'),
    lastname: Yup.string().required('*Please enter your lastname!!'),
    username: Yup.string().required('*Please enter your username!!'),
    password: Yup.string().required('*Please enter your password!!'),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('Submitting form', values);

    axios
      .post('https://save-the-animals-app.herokuapp.com/api/register', values)
      .then(res => {
        console.log('Success:', res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => {
        console.log('Error:', err.response);
      });
  },
})(SignupForm);

export default FormikSignupForm;
