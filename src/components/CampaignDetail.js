import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default function Campaign() {
  return (
    <div>
      <Modal trigger={<Button>Campaign Detail</Button>}>
        <Modal.Header>Campaign Title</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://imgix.bustle.com/uploads/getty/2020/1/3/9222d346-698e-4272-9db5-b08f5d57e07e-getty-1191135603.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
          />
          <Modal.Description>
            <Header>Campaign Detail</Header>
            <p>Details of the Campaign</p>
            <p>Species</p>
            <p>Location</p>
            <p>Urgency Level</p>
            <p>Funding Goal </p>
            <p>Deadline</p>
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button>Save to Favourite</Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

// Campaign page with the details has edit/delete/add functions
