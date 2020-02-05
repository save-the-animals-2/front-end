import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../index.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const OrganizationDashboardTwo = () => {
  const [campaigns, setCampaigns] = useState([]);
  // let {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://save-the-animals-app.herokuapp.com/api/campaigns`)
      .then(res => {
        setCampaigns(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(campaigns);

  return (
    <>
      <NavBar />
      <div className="fnu-org-dash-button-box">
        <Link to="/campaignform">
          <button className="fnu-org-dash-button">Add A New Campaign</button>
        </Link>
      </div>
      <div className="fnu-org-dash-campaigns-box">
        {campaigns.map(camp => {
          return <OrganizationDashboardTwoCampaignsList camp={camp} />;
        })}
      </div>
    </>
  );
};

const OrganizationDashboardTwoCampaignsList = ({ camp }) => {
  const {
    photo_url,
    title,
    location,
    urgency_level,
    org_name,
    funding_goal,
  } = camp;
  return (
    <div className="fnu-org-dash-campaign-box">
      <img className="fnu-org-dash-campaign-photo" src={photo_url} />
      <h1 className="fnu-org-dash-campaign-header">Campaign Name: {title}</h1>
      <h3 className="fnu-org-dash-campaign-header">
        Organization Name: {org_name}
      </h3>
      <h4 className="fnu-org-dash-campaign-header">Location: {location}</h4>
      <h4 className="fnu-org-dash-campaign-header">
        Urgency Level: {urgency_level}
      </h4>
      <h4 className="fnu-org-dash-campaign-header">
        Funding Goal: {funding_goal}
      </h4>
    </div>
  );
};

export default OrganizationDashboardTwo;
