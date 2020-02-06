import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar';
import '../index.css';
import api from '../utils/api';

const LoginForm = ({ errors, touched, values, status }) => {
  const [orgUser, setOrgUser] = useState([]);

  useEffect(() => {
    status && setOrgUser(() => [...orgUser, status]);
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
              placeholder="username"
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
      org_id: '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('*Please enter your username!!'),
    password: Yup.string().required('*Please enter your password!!'),
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log('Submitting form', values);
    api()
      .post('https://save-the-animals-app.herokuapp.com/api/login', values)
      .then(res => {
        console.log('Success:', res);
        setStatus(res.data.user.user_type);
        resetForm();
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('org_id', res.data.user.org_id);
        props.history.push(`/${res.data.user.user_type}`);
      })
      .catch(err => {
        console.log('Error:', err.response);
      });
  },
})(LoginForm);

export default FormikLoginForm;
