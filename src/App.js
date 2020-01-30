import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrganizationDashboard from './components/organizations/OrganizationDashboard';
import SupporterDashboard from './components/supporters/SupporterDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/organization" component={OrganizationDashboard} />
      <Route path="/supporter" component={SupporterDashboard} />
    </div>
  );
}

export default App;
