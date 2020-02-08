import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { getCampaigns } from '../redux/actions/organizationActions';
import styled from 'styled-components';
import OrganizationDashboardCard from './OrganizationDashboardCard';
import CampaignForm from './CampaignForm';

function OrganizationDashboard(props) {
  console.log(props.campaigns);
  const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #00cccc;
    margin: 0 0 24px;
  `;

  const StyledDiv = styled.div`
    padding: 1%;
  `;

  const Section = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    width: 20%;
  `;

  const CardsandCreate = styled.div`
    display: flex;
    width: 100%;
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
            <StyledH1>Welcome to your Account !</StyledH1>
          </StyledDiv>
          <CardsandCreate>
            <CampaignForm />

            <Section>
              {props.campaigns.map(item => (
                <div key={item.id}>
                  <OrganizationDashboardCard data={item} />
                </div>
              ))}
            </Section>
          </CardsandCreate>
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
