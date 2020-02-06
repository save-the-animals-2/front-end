import api from '../../utils/api';

//EDIT A CAMPAIGN for an specific organization
export const UPDATE_CAMPAIGN_START = 'UPDATE_USER_BIO_START';
export const UPDATE_CAMPAIGN_SUCCESS = 'UPDATE_USER_BIO_SUCCESS';
export const UPDATE_CAMPAIGN_ERROR = 'UPDATE_USER_BIO_ERROR';

export function updateCampaign(updatedInfo) {
  return dispatch => {
    dispatch({ type: UPDATE_CAMPAIGN_START });

    api()
      .put(`/api/campaigns/${localStorage.getItem('org_id')}`, updatedInfo)
      .then(res => {
        dispatch({ type: UPDATE_CAMPAIGN_SUCCESS, payload: res.data });
        console.log(res.data);
      })
      .catch(err => {
        dispatch({ type: UPDATE_CAMPAIGN_ERROR, payload: err });
      });
  };
}

//DELETING A CAMPAIGN From specific organization
export const DELETE_ITEMS_START = 'DELETE_ITEMS_START';
export const DELETE_ITEMS_SUCCESS = 'DELETE_ITEMS_SUCCESS';
export const DELETE_ITEMS_ERROR = 'DELETE_ITEMS_ERROR';

export const deleteCampaign = (item, incomingOrgID) => {
  return dispatch => {
    dispatch({ type: DELETE_ITEMS_START });

    api()
      .delete(`/api/campaigns/${incomingOrgID}`, item)
      .then(res => {
        dispatch({ type: DELETE_ITEMS_SUCCESS, payload: res.data });
        console.log(item);
      })
      .catch(err => {
        dispatch({ type: DELETE_ITEMS_ERROR, payload: err.error });
      });
  };
};

//FETCHING A CAMPAIGN FOR INDIVIDUAL Organizations

export const FETCH_USER_ITEMS_START = 'FETCH_USER_ITEMS_START';
export const FETCH_USER_ITEMS_SUCCESS = 'FETCH_USER_ITEMS_SUCCESS';
export const FETCH_USER_ITEMS_ERROR = 'FETCH_USER_ITEMS_ERROR';

export const getCampaigns = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_ITEMS_START });

    api()
      .get(`/api/organizations/:${localStorage.getItem('org_id')}`)
      .then(res => {
        console.log('coming from actions', res);
        dispatch({ type: FETCH_USER_ITEMS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_ITEMS_ERROR, payload: err.error });
      });
  };
};
