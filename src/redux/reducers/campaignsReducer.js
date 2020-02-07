export const initialState = {
  campaigns: [],
  isLoading: false,
  campId: {
    campaign_id: '',
  },
  isAdding: false,
};

export const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CAMPAIGNS':
      return { ...state, isLoading: true };
    case 'FETCHING_CAMPAIGNS_SUCCESSFUL':
      return { ...state, isLoading: false, campaigns: action.payload };
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        isAdding: true,
      };
    case 'ADD_TO_FAVOURITE_CAMPAIGN_SUCCESSFUL':
      return {
        ...state,
        isAdding: false,
        campId: {
          campaign_id: action.payload,
        },
      };
    default:
      return state;
  }
};
