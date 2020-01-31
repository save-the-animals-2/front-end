import React from 'react';
import NavBar from './NavBar';
import CampaignList from './CampaignList';

export default function SupporterDashboard() {
  return (
    <div>
      <NavBar />
      Supporter Dashboard
      <CampaignList />
    </div>
  );
}

//Create favourite campaigns and displayes the list of fav campaigns
