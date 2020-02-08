import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrganizationDashboard from './components/OrganizationDashboard';
import OrganizationDashboardTwo from './components/organizationDashboardTwo';
import SupporterDashboard from './components/SupporterDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CampaignsPage from './components/CampaignsPage';
import CampaignForm from './components/CampaignForm';
import ProtectedRoute from './utils/protectedRoute';
import './joseR.css';
import Logout from './components/LogOut';
import OrganizationDashboardTwoCard from './components/OrganizationDashboardTwoCard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/organization" component={OrganizationDashboard} />
      <ProtectedRoute path="/supporter/:id" component={SupporterDashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/campaigns" component={CampaignsPage} />
      <ProtectedRoute path="/campaignform" component={CampaignForm} />
      <ProtectedRoute path="/logout" component={Logout} />
      <ProtectedRoute
        path="/organizationtwo"
        component={OrganizationDashboardTwo}
      />
      <ProtectedRoute
        path="/orgdashcard/:id"
        component={OrganizationDashboardTwoCard}
      />
    </div>
  );
}

export default App;
