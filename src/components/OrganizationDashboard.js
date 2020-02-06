import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCampaigns } from '../redux/actions/organizationActions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NavBar from './NavBar';
import CampaignForm from './CampaignForm';
import { getCampaigns } from '../redux/actions/organizationActions';

function OrganizationDashboard(props) {
  console.log(props);

  useEffect(() => {
    props.getCampaigns();
  }, []);

  return (
    <div>
      <NavBar />
      Organization Dashboard
      {/* <CampaignList /> */}
      <CampaignForm />
    </div>
  );
}

//Create Campaign button, and list of its created campaigns
//When you click on the existing campaign it directs to Campaign page and allows you to delete/edit
function mapStateToProps(state) {
  return {
    campaigns: state.organizationReducer.campaigns,
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  getCampaigns,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationDashboard);
