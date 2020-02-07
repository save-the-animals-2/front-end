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

export const addToFavourite = (campaign, id) => {
  return dispatch => {
    dispatch({ type: 'ADD_TO_FAVOURITE' });

    api()
      .post(`/api/users/${id}/favorites`, campaign) //attach id in the url
      .then(res => {
        dispatch({
          type: 'ADD_TO_FAVOURITE_CAMPAIGN_SUCCESSFUL',
          payload: res.data,
        });
        console.log('ADDING FAV CAMPAIGN:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// export const editCampaign = (id, campaignInfo) => {
//   return dispatch => {
//     dispatch({ type: 'EDIT_CAMPAIGN' });

//     axios
//       .put(``, campaignInfo) //attach id in the url
//       .then(res => {
//         console.log('Edit:', res.data);
//         dispatch({ type: 'EDIT_CAMPAIGN_SuCCESSFUL', payload: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };

// export const deleteCampaign = id => {
//   return dispatch => {
//     dispatch({ type: 'DELETE_CAMPAIGN' });

//     axios
//       .delete(``) //attach id in the url
//       .then(res => {
//         dispatch({ type: 'DELETE_CAMPAIGN_SUCCESSFUL', payload: res.data });
//         console.log('Delete:', res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
