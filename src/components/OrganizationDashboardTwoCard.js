import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

export default function OrganizationDashboardTwoCard(props) {
  const [campCard, setCampCard] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`https://save-the-animals-app.herokuapp.com/api/campaigns/${id}`)
      .then(response => {
        setCampCard(response.data);
        console.log(campCard);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const {
    title,
    photo_url,
    org_name,
    location,
    urgency_level,
    funding_goal,
    species,
    deadline,
  } = campCard;
  console.log(campCard);
  return (
    <>
      <NavBar />
      <div className="fnu-org-dash-campaign-box">
        <img className="fnu-org-dash-campaign-photo" src={photo_url} />
        <h1 className="fnu-org-dash-campaign-header">Campaign Name: {title}</h1>
        <h3 className="fnu-org-dash-campaign-header">
          Organization Name: {org_name}
        </h3>
        <h4 className="fnu-org-dash-campaign-header">Location: {location}</h4>
        <h4 className="fnu-org-dash-campaign-header">Species: {species}</h4>
        <h4 className="fnu-org-dash-campaign-header">
          Urgency Level: {urgency_level}
        </h4>
        <h4 className="fnu-org-dash-campaign-header">
          Funding Goal: {funding_goal}
        </h4>
        <h4 className="fnu-org-dash-campaign-header">Deadline: {deadline}</h4>
        <button className="fnu-org-dash-campaigncard-btn">
          Click to donate
        </button>
      </div>
    </>
  );
}
