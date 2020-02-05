import axios from 'axios';

export function signingUp(username, email, password, user_type) {
  return dispatch => {
    dispatch({ type: 'SIGNINGUP_START' });

    return axios
      .post('https://save-the-animals-app.herokuapp.com/api/register', {
        username,
        email,
        password,
        user_type,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: 'SIGNINGUP_SUCCESS', payload: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
}
