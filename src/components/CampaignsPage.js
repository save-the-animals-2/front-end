import React, { useEffect } from 'react';
import CampaignList from './CampaignList';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import {
  fetchingCampaigns,
  addToFavourite,
} from '../redux/actions/campaignsActions';

function CampaignsPage(props) {
  const id = localStorage.getItem('id');

  useEffect(() => {
    props.fetchingCampaigns();
  }, []);

  return (
    <div>
      <NavBar />
      <CampaignList
        campaigns={props.campaigns}
        addToFavourite={props.addToFavourite}
      />
    </div>
  );
}

const mapStateToProps = state => {
  console.log('State:', state);
  return {
    campaigns: state.campaignsReducer.campaigns,
    favCampaign: state.campaignsReducer.favCampaign,
  };
};

export default connect(mapStateToProps, { fetchingCampaigns, addToFavourite })(
  CampaignsPage
);

//Campaigns Home page - Dashboard
