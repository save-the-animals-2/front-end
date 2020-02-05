import React, { useEffect } from 'react';
import CampaignList from './CampaignList';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { fetchingCampaigns } from '../redux/actions/campaignsActions';

function CampaignsPage(props) {
  useEffect(() => {
    props.fetchingCampaigns();
  }, []);

  return (
    <div>
      <NavBar />
      <CampaignList campaigns={props.campaigns} />
    </div>
  );
}
const mapStateToProps = state => {
  console.log('State:', state);
  return {
    campaigns: state.campaignsReducer.campaigns,
  };
};

export default connect(mapStateToProps, { fetchingCampaigns })(CampaignsPage);

//Campaigns Home page - Dashboard
