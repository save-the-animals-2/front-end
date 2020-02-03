import React from 'react';
import CampaignThumbnail from './CampaignThumbnail';

export default function CampaignList() {
  return (
    <div>
      {/* we are gonna map through the data and pass into the CampaignCard*/}
      <CampaignThumbnail />
    </div>
  );
}

//Map of CampaignThumbnail
