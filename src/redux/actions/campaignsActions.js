import { axiosWithAuth } from '../../utils/getToken';

export const fetchingCampaigns = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_CAMPAIGNS' });

    axiosWithAuth()
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
