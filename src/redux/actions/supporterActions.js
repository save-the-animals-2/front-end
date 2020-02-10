import api from '../../utils/api';

export const fetchFavCampaigns = id => {
  return dispatch => {
    dispatch({ type: 'FETCHING_DATA' });

    api()
      .get(`/api/users/${id}/favorites`)
      .then(res => {
        dispatch({ type: 'FETCHING_SUCCESSFUL', payload: res.data });
        console.log('FETCHING FAV CAMPAIGNS:', res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const deleteFavCampaign = (id, campaignId) => {
  return dispatch => {
    dispatch({ type: 'DELETING_DATA' });

    api()
      .delete(`/api/users/${id}/favorites/${campaignId}`)
      .then(res => {
        dispatch({ type: 'DELETING_SUCCESSFUL' });
        window.location.reload();
        console.log('DELETING_SUCCESSFUL:');
      })
      .catch(err => {
        console.log(err.message);
      });
    api()
      .get(`/api/users/${id}/favorites`)
      .then(res => {
        dispatch({ type: 'FETCHING_SUCCESSFUL', payload: res.data });
        console.log('FETCHING FAV CAMPAIGNS:', res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
