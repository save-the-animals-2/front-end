import { axiosWithAuth } from '../../utils/getToken';

//CREATE A CAMPAIGN
export const createCampaigns = incomingState => {
  return dispatch => {
    dispatch({ type: 'LOADING_CREATE' });
    axiosWithAuth()
      .post(
        'https://save-the-animals-app.herokuapp.com/api/campaigns',
        incomingState
      )
      .then(res => {
        dispatch({ type: 'CREATED_CAMPAIGN', payload: res.data });
      })
      .catch(error => {
        dispatch({ type: 'ADD_ITEMS_ERROR', payload: error.message });
      });
  };
};
//EDIT A CAMPAIGN
export const updateCampaign = (id, incomingSecondState) => {
  return dispatch => {
    dispatch({ type: 'LOADING_EDIT' });

    axiosWithAuth()
      .put(
        `https://save-the-animals-app.herokuapp.com/api/campaigns/${id}`,
        incomingSecondState
      )
      .then(res => {
        console.log('coming from editCampaign:', res.data);
        dispatch({ type: 'EDIT_CAMPAIGN', payload: res.data });
      })
      .catch(err => {
        console.log('coming from editCampaign:', err);
      });
  };
};

//DELETING A CAMPAIGN
export const deleteCampaign = incomingOrgID => {
  return dispatch => {
    dispatch({ type: 'LOADING_DELETE' });

    axiosWithAuth()
      .delete(
        `https://save-the-animals-app.herokuapp.com/api/campaigns/${incomingOrgID}`
      )
      .then(res => {
        dispatch({ type: 'DELETE_CAMPAIGN_SUCCESSFUL', payload: res.data });
        console.log('coming from deleteCampaign:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//FETCHING A CAMPAIGN
export const getCampaigns = (org_id, item) => {
  return dispatch => {
    dispatch({ type: 'LOADING_CAMPAIGNS' });
    axiosWithAuth()
      .get(
        `https://save-the-animals-app.herokuapp.com/api/organizations/${org_id}`,
        item
      )
      .then(res => {
        console.log('coming from getCampaigns', res);
        dispatch({ type: 'CAMPAIGNS_SUCESSFULLY_FETCHED', payload: res.data });
      })
      .catch(err => console.log('ERROR', err));
  };
};
