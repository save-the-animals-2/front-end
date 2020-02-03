import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ errors, touched, values, status }) => {
  const [logInUser, setLogInUser] = useState([]);

  useEffect(() => {
    status && setLogInUser(logInUser => [...logInUser, status]);
  }, [status]);

  return <div>Login</div>;
};

export default LoginForm;
