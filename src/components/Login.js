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
  }, [orgUser]);

  console.log(orgUser);

  return (
    <>
      <NavBar />
      <div className="fnu-login-form-box">
        <h1 className="fnu-login-form-title">Log In</h1>
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
            <button className="fnu-login-button">Log in</button>
          </div>
          <Link to="/signup">
            <div className="fnu-signup-button-box">
              <button className="fnu-signup-button">Sign up</button>
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
      .post('/api/login', values)
      .then(res => {
        console.log('Success:', res);
        setStatus(res.data.user.user_type);
        resetForm();
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.user.id);
        localStorage.setItem('org_id', res.data.user.org_id);
        props.history.push(`/${res.data.user.user_type}/${res.data.user.id}`);
      })
      .catch(err => {
        console.log('Error:', err.response);
      });
  },
})(LoginForm);

export default FormikLoginForm;
