import React from 'react';
import { Card, Icon, Image, Button, Modal, Header } from 'semantic-ui-react';

export default function CampaignThumbnail({ campaign, addToFavourite }) {
  const id = localStorage.getItem('id');
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
          <a href="/home">
            <Icon name="paw" />
            Urgency Level: {campaign.urgency_level}
          </a>
        </Card.Content>
        <Button
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: 'red',
            pointing: 'left',
            content: '100',
          }}
          onClick={() => addToFavourite(id, campaign.id)}
        />
        <Modal
          size="tiny"
          centered="true"
          trigger={
            <Button
              color="blue"
              content="detail"
              icon="world"
              label={{ basic: true, color: 'red', pointing: 'left' }}
            />
          }
        >
          <Modal.Header>{campaign.title}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={campaign.photo_url} />
            <Modal.Description>
              <Header>{campaign.title}</Header>
              <p>Details of the Campaign : {campaign.description}</p>
              <p>Species: {campaign.species}</p>
              <p>Location: {campaign.location}</p>
              <p>Urgency Level: {campaign.urgency_level}</p>
              <p>Funding Goal: {campaign.funding_goal} </p>
              <p>Deadline: {campaign.deadline}</p>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card>
    </div>
  );
}
