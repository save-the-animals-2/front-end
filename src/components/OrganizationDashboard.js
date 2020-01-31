import React from 'react';
import CampaignList from './CampaignList';
import NavBar from './NavBar';

export default function OrganizationDashboard() {
  return (
    <div>
      <NavBar />
      Organization Dashboard
      <CampaignList />
      {/*Button to the Campaign Form */}
    </div>
  );
}

//Create Campaign button, and list of its created campaigns
//When you click on the existing campaign it directs to Campaign page and allows you to delete/edit
