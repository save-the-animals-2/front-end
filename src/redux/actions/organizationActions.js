import api from '../../utils/api';

//FETCHING A CAMPAIGN FOR INDIVIDUAL Organizations

export const FETCH_USER_ITEMS_START = 'FETCH_USER_ITEMS_START';
export const FETCH_USER_ITEMS_SUCCESS = 'FETCH_USER_ITEMS_SUCCESS';
export const FETCH_USER_ITEMS_ERROR = 'FETCH_USER_ITEMS_ERROR';

export const getCampaigns = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_ITEMS_START });

    api()
      .get(`/api/organizations/${localStorage.getItem('org_id')}`)
      .then(res => {
        console.log('coming from actions', res.data);
        dispatch({
          type: FETCH_USER_ITEMS_SUCCESS,
          payload: res.data.map(data => {
            return {
              id: data.id,
              title: data.title,
              description: data.description,
              photo_url: data.photo_url,
              location: data.location,
              species: data.species,
              urgency_level: data.urgency_level,
              funding_goal: data.funding_goal,
              deadline: data.deadline,
              org_id: data.org_id,
              org_name: data.org_name,
            };
          }),
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_ITEMS_ERROR, payload: err.error });
      });
  };
};
