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
    status && setSupUsers(() => [...supUsers, status]);
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
              name="username"
              placeholder="username"
              value={values.username}
            />
            <Field
              className="fnu-signup-input"
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
            />
            <Field
              className="fnu-signup-input"
              type="text"
              name="email"
              placeholder="email address"
              value={values.email}
            />
            <label className="fnu-signup-checkbox-box">
              <h4 className="fnu-signup-checkbox-title">
                Are you an organization?
              </h4>
              <Field
                className="fnu-signup-checkbox"
                type="checkbox"
                name="user_type"
                checked={values.user_type}
              />
            </label>
            {values.user_type && (
              <Field
                className="fnu-signup-input"
                type="number"
                name="org_id"
                placeholder="organization id"
                value={values.org_id}
              />
            )}
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
            {touched.username && errors.username && (
              <strong className="fnu-alert-message">{errors.username}</strong>
            )}
            {touched.password && errors.password && (
              <strong className="fnu-alert-message">{errors.password}</strong>
            )}
            {touched.email && errors.email && (
              <strong className="fnu-alert-message">{errors.email}</strong>
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
      username: supUsers || '',
      password: '',
      email: '',
      user_type: false,
      org_id: '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('*Please enter your username!!'),
    password: Yup.string().required('*Please enter your password!!'),
    email: Yup.string().required('*Please enter your email address!!'),
    user_type: Yup.bool(),
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    if (values.user_type === true) {
      values.user_type = 'organization';
      axios
        .post('https://save-the-animals-app.herokuapp.com/api/register', values)
        .then(res => {
          console.log('Success:', res);
          setStatus(res.data);
          resetForm();
          localStorage.setItem('token', res.data.token);
          props.history.push('/campaigns');
        })
        .catch(err => {
          console.log('Error:', err.response);
        });
    } else {
      values.user_type = 'supporter';
      values.org_id = null;
      axios
        .post('https://save-the-animals-app.herokuapp.com/api/register', values)
        .then(res => {
          console.log('Success:', res);
          setStatus(res.data);
          resetForm();
          localStorage.setItem('token', res.data.token);
          props.history.push('/');
        })
        .catch(err => {
          console.log('Error:', err.response);
        });
    }
    console.log('Submitting form', values);
  },
})(SignupForm);

export default FormikSignupForm;
