const initialState = {
  isFetching: false,
  isAdding: false,
  favCampaigns: [],
  favCampaign: {
    campaign_id: '',
  },
};

export const supporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_FAV_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCHING_FAV_SUCCESSFUL':
      return {
        ...state,
        isFetching: false,
        favCampaigns: [...state.favCampaigns, action.payload],
      };
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        isAdding: true,
      };
    case 'ADD_TO_FAVOURITE_CAMPAIGN_SUCCESSFUL':
      return {
        ...state,
        isAdding: false,
        favCampaign: action.payload,
      };
    default:
      return state;
  }
};
