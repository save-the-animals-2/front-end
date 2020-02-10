import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import CampaignList from './CampaignList';
import { connect } from 'react-redux';
import {
  fetchFavCampaigns,
  deleteFavCampaign,
} from '../redux/actions/supporterActions';

function SupporterDashboard(props) {
  //  console.log("PROPRS:", props)

  useEffect(() => {
    props.fetchFavCampaigns(props.match.params.id);
  }, [props.match.params.id, props.isDeleting]);

  return (
    <div>
      <NavBar />
      Hello User! Liked Campaigns
      <CampaignList
        favCampaigns={props.favCampaigns}
        deleteFavCampaign={props.deleteFavCampaign}
      />
    </div>
  );
}

//Create favourite campaigns and displayes the list of fav campaigns
const mapStateToProps = state => {
  return {
    favCampaigns: state.supporterReducer.favCampaigns,
    isDeleting: state.supporterReducer.isDeleting,
  };
};

export default connect(mapStateToProps, {
  fetchFavCampaigns,
  deleteFavCampaign,
})(SupporterDashboard);
