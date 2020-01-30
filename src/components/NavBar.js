import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <h1>Nav</h1>
      <Link to="/">Home</Link>
      <Link to="/supporter">Support</Link>
      <Link to="/organization">Organization</Link>
    </div>
  );
}
