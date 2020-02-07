import React from 'react';
import CampaignThumbnail from './CampaignThumbnail';
import { Grid } from 'semantic-ui-react';

function CampaignList(props) {
  console.log('Campaigns props from CampaignsPage:', props.campaigns);

  return (
    <div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            {props.campaigns.map(campaign => {
              return (
                <CampaignThumbnail
                  campaign={campaign}
                  key={campaign.id}
                  addToFavourite={props.addToFavourite}
                />
              );
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default CampaignList;

//Map of CampaignThumbnail
