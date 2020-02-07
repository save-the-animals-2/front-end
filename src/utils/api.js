import axios from 'axios';

export function getToken() {
  return localStorage.getItem('token');
}

export default function() {
  return axios.create({
    baseURL: 'https://save-the-animals-app.herokuapp.com/',
    headers: {
      Authorization: getToken(),
    },
  });
}
