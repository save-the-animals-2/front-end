import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ errors, touched, values, status }) => {
  const [logInUsers, setLogInUsers] = useState([]);

  useEffect(() => {
    status && setLogInUsers(logInUser => [...logInUser, status]);
  }, [status]);

  return <div>Login</div>;
};

export default LoginForm;
