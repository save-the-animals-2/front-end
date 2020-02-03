import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar';
import '../index.css';

const SignupForm = ({ errors, touched, values, status }) => {
  const [supUsers, setSupUsers] = useState([]);

  useEffect(() => {
    status && setSupUsers(supUser => [...supUser, status]);
  }, [status]);

  return (
    <>
      {/* <NavBar/> */}
      <div className="signup-form-box">
        <h1>Create Your New Account</h1>
        <Form className="signup-form">
          <div className="signup-inputs">
            <Field
              className="signup-input"
              type="text"
              name="firstname"
              placeholder="enter your first name"
              value={values.firstname}
            />
            <Field
              className="signup-input"
              type="text"
              name="lastname"
              placeholder="enter your last name"
              value={values.lastname}
            />
            <Field
              className="signup-input"
              type="text"
              name="username"
              placeholder="enter your email as your user name"
              value={values.username}
            />
            <Field
              className="signup-input"
              type="text"
              name="password"
              placeholder="enter your password"
              value={values.password}
            />
          </div>
          <div>
            <button className="signup-create-button">Click to sign up</button>
          </div>
          <Link to="/login">
            <div>
              <button className="signup-login-button">
                Click to log in if you have an account already
              </button>
            </div>
          </Link>
          <div className="alert-message-boxes">
            {touched.firstname && errors.firstname && (
              <strong className="alert-message">{errors.firstname}</strong>
            )}
            {touched.lastname && errors.lastname && (
              <strong className="alert-message">{errors.lastname}</strong>
            )}
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
  },
})(SignupForm);

export default FormikSignupForm;
