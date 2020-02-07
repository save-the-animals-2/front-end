import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCampaigns } from '../redux/actions/organizationActions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NavBar from './NavBar';
import CampaignForm from './CampaignForm';
import { getCampaigns } from '../redux/actions/organizationActions';
import styled from 'styled-components';

function OrganizationDashboard(props) {
  const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #00cccc;
    margin: 0 0 24px;
  `;

  const StyledDiv = styled.div`
    padding: 5%;
  `;

  const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  useEffect(() => {
    props.getCampaigns();
  }, []);
  return (
    <div>
      <NavBar />
      {/* <CampaignList /> */}

      {props.userInfoError && <p>Error: {props.userInfoError}</p>}
      {props.isInfoLoading ? (
        <h1>Loading your Dashboard...</h1>
      ) : (
        <div>
          <StyledDiv>
            <StyledH1>Welcome to your Account</StyledH1>
          </StyledDiv>

          <Section>{/* card will be here */}</Section>

          <CampaignForm />
        </div>
      )}
    </div>
  );
}

//Create Campaign button, and list of its created campaigns
//When you click on the existing campaign it directs to Campaign page and allows you to delete/edit
function mapStateToProps(state) {
  return {
    campaigns: state.organizationReducer.campaigns,
    isInfoLoading: state.organizationReducer.isLoading,
    userInfoError: state.organizationReducer.error,
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
