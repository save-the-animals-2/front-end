import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { getCampaigns } from '../redux/actions/organizationActions';
import styled from 'styled-components';
import OrganizationDashboardCard from './OrganizationDashboardCard';
import CampaignForm from './CampaignForm';

function OrganizationDashboard(props) {
  console.log();
  const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    color: #00cccc;
    // margin: 0 0 24px;
    margin-left: 2%;
    margin-bottom: 2%;
  `;

  const StyledH2 = styled.h2`
    margin-left: 5%;
  `;

  const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 3%;
  `;

  const Section = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: -2%;
    width: 100%;
    height: auto;
    flex-direction: row;
  `;

  const CardsandCreate = styled.div``;

  useEffect(() => {
    props.getCampaigns();
  }, []);
  return (
    <div>
      <NavBar />
      <StyledH1>{`Welcome to your Dashboard, ${props.campaigns[0].org_name}!`}</StyledH1>
      <StyledH2>Make changes to your campaigns!</StyledH2>
      {/* <CampaignList /> */}
      {props.userInfoError && <p>Error: {props.userInfoError}</p>}
      {props.isInfoLoading ? (
        <h1>Loading your Dashboard...</h1>
      ) : (
        <div>
          <StyledDiv>
            <Section>
              {props.campaigns.map(item => (
                <div className="individualCards" key={item.id}>
                  <OrganizationDashboardCard data={item} />
                </div>
              ))}
            </Section>
            <CardsandCreate>
              <CampaignForm />
            </CardsandCreate>
          </StyledDiv>
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
