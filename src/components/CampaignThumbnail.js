import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function CampaignThumbnail() {
  return (
    <div>
      <Grid>
        <Grid.Row columns={10} divided centered>
          <Grid.Column>
            <Image src="https://cdn.trendhunterstatic.com/thumbs/snapchat-photos.jpeg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://cdn.trendhunterstatic.com/thumbs/snapchat-photos.jpeg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://cdn.trendhunterstatic.com/thumbs/snapchat-photos.jpeg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://cdn.trendhunterstatic.com/thumbs/snapchat-photos.jpeg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={10} divided centered>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={10} centered>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

//Individual thumbnail has small photo and title
