import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar';
import axios from 'axios';
import '../index.css';

const LoginForm = ({ errors, touched, values, status }) => {
  const [orgUser, setOrgUser] = useState([]);

  useEffect(() => {
    status && setOrgUser(orgUser => [...orgUser, status]);
  }, [status]);

  return (
    <>
      <NavBar />
      <div className="fnu-login-form-box">
        <h1 className="fnu-login-form-title">Log In To Get Started</h1>
        <Form className="fnu-login-form">
          <div className="fnu-login-inputs">
            <Field
              className="fnu-input"
              type="text"
              name="username"
              placeholder="email address"
              value={values.username}
            />
            <Field
              className="fnu-input"
              type="text"
              name="password"
              placeholder="password"
              value={values.password}
            />
          </div>
          <div className="fnu-login-button-box">
            <button className="fnu-login-button">Click to log in</button>
          </div>
          <Link to="/signup">
            <div className="fnu-signup-button-box">
              <button className="fnu-signup-button">Click to sign up</button>
            </div>
          </Link>
          <div className="fnu-alert-message-boxes">
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

const FormikLoginForm = withFormik({
  mapPropsToValues({ orgUsers }) {
    return {
      username: orgUsers || '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('*Please enter your username!!'),
    password: Yup.string().required('*Please enter your password!!'),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('Submitting form', values);

    axios
      .post('https://save-the-animals-app.herokuapp.com/api/login', values)
      .then(res => {
        console.log('Success:', res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => {
        console.log('Error:', err.response);
      });
  },
})(LoginForm);

export default FormikLoginForm;
