import axios from 'axios';

export const fetchingData = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_DATA' });

    axios
      .get(``)
      .then(res => {
        dispatch({ type: 'FETCHING_SUCCESSFUL', payload: res.data });
        console.log('Get call:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editCampaign = (id, campaignInfo) => {
  return dispatch => {
    dispatch({ type: 'EDIT_CAMPAIGN' });

    axios
      .put(``, campaignInfo) //attach id in the url
      .then(res => {
        console.log('Edit:', res.data);
        dispatch({ type: 'EDIT_CAMPAIGN_SuCCESSFUL', payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteCampaign = id => {
  return dispatch => {
    dispatch({ type: 'DELETE_CAMPAIGN' });

    axios
      .delete(``) //attach id in the url
      .then(res => {
        dispatch({ type: 'DELETE_CAMPAIGN_SUCCESSFUL', payload: res.data });
        console.log('Delete:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addToFavourite = campaign => {
  return dispatch => {
    dispatch({ type: 'ADD_TO_FAVOURITE' });

    axios
      .post(``, campaign) //attach id in the url
      .then(res => {
        dispatch({
          type: 'ADD_TO_FAVOURITE_CAMPAIGN_SUCCESSFUL',
          payload: res.data,
        });
        console.log('AddingToFav:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
