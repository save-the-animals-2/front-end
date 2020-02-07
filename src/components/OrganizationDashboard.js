import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCampaigns } from '../redux/actions/organizationActions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NavBar from './NavBar';

export default function OrganizationDashboard(props) {
  const getUserId = localStorage.getItem('org_id');

  const [item, setItem] = useState({
    id: '',
    title: '',
    description: '',
    photo_url: '',
    location: '',
    species: '',
    urgency_level: '',
    funding_goal: '',
    deadline: '',
    org_id: getUserId,
  });

  const handleChange = event => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
    console.log(item.price);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.createCampaigns(item);
    setItem({
      name: '',
      city: '',
      country: '',
      price: [],
      description: '',
    });
  };

  return (
    <div>
      <NavBar />
      Organization Dashboard
      {/* <CampaignList /> */}
      <button>Add New Campaign</button>
    </div>
  );
}

//Create Campaign button, and list of its created campaigns
//When you click on the existing campaign it directs to Campaign page and allows you to delete/edit
