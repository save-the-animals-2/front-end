import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar';
import SignUp from './SignUp';
import '../index.css';

const LoginForm = ({ errors, touched, values, status }) => {
  const [orgUsers, setOrgUsers] = useState([]);

  useEffect(() => {
    status && setOrgUsers(orgUser => [...orgUser, status]);
  }, [status]);

  return (
    <>
      {/* <NavBar/> */}
      <div className="login-form-box">
        <h1>Log In To Get Started</h1>
        <Form className="login-form">
          <div className="login-inputs">
            <Field
              className="input"
              type="text"
              name="username"
              placeholder="enter your email"
              value={values.username}
            />
            <Field
              className="input"
              type="text"
              name="password"
              placeholder="enter your password"
              value={values.password}
            />
          </div>
          <div className="login-button-box">
            <button className="login-button">Click to log in</button>
          </div>
          <Link to="/signup">
            <div className="signup-button-box">
              <button className="signup-button">Click to sign up</button>
            </div>
          </Link>
          <div className="alert-message-boxes">
            {touched.username && errors.username && (
              <strong className="alert-message">{errors.username}</strong>
            )}
            {touched.password && errors.password && (
              <strong className="alert-message">{errors.password}</strong>
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
  },
})(LoginForm);

export default FormikLoginForm;
