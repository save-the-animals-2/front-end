import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrganizationDashboard from './components/OrganizationDashboard';
import SupporterDashboard from './components/SupporterDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CampaignsPage from './components/CampaignsPage';
import CampaignForm from './components/CampaignForm';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/organization" component={OrganizationDashboard} />
      <Route path="/supporter" component={SupporterDashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/campaigns" component={CampaignsPage} />
      <Route path="/campaignform" component={CampaignForm} />
    </div>
  );
}

export default App;
