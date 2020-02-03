import React from 'react';
import CampaignThumbnail from './CampaignThumbnail';
import Campaign from './Campaign';

export default function CampaignList() {
  return (
    <div>
      {/* we are gonna map through the data and pass into the CampaignCard*/}
      <CampaignThumbnail />
      <Campaign />
    </div>
  );
}

//Map of CampaignThumbnail
