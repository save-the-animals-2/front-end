import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import CampaignList from './CampaignList';
import { connect } from 'react-redux';
import { fetchFavCampaigns } from '../redux/actions/supporterActions';

function SupporterDashboard(props) {
  const [favCampaigns, setFavCampaigns] = useState([]);

  // const id = localStorage.getItem('id')

  useEffect(() => {
    props.fetchFavCampaigns(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <NavBar />
      Hello User! Liked Campaigns
      {/* <CampaignList /> */}
    </div>
  );
}

//Create favourite campaigns and displayes the list of fav campaigns
const mapStateToProps = state => {
  return {
    favCampaigns: state.supporterReducer.favCampaigns,
  };
};

export default connect(mapStateToProps, { fetchFavCampaigns })(
  SupporterDashboard
);
