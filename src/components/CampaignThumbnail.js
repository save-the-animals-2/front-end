import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

export default function CampaignThumbnail({ campaign }) {
  return (
    <div>
      <Card>
        <Image src={campaign.photo_url} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{campaign.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              <Icon name="location arrow" />
              {campaign.location}
            </span>
          </Card.Meta>
          <Card.Description>
            Organization Name: {campaign.org_name}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="paw" />
            Urgency Level: {campaign.urgency_level}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
