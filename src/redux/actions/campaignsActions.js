import api from '../../utils/api';

export const fetchingCampaigns = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_CAMPAIGNS' });

    api()
      .get(`/api/campaigns`)
      .then(res => {
        dispatch({ type: 'FETCHING_CAMPAIGNS_SUCCESSFUL', payload: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addToFavourite = (id, campId) => {
  return dispatch => {
    dispatch({ type: 'ADD_TO_FAVOURITE' });

    api()
      .post(`/api/users/${id}/favorites/`, { campaign_id: 1 }) //attach id in the url
      .then(res => {
        dispatch({
          type: 'ADD_TO_FAVOURITE_CAMPAIGN_SUCCESSFUL',
        });
        console.log('ADDING FAV CAMPAIGN:');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
