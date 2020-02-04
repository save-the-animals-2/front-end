const initialState = {
  id: '',
  isFetching: false,
  isAdding: false,
  campaign: '',
  campaigns: [],
};

export const supporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCHING_SUCCESSFUL':
      return {
        ...state,
        isFetching: false,
        campaigns: [...state.campaigns, action.payload],
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
        campaign: action.payload,
      };
    default:
      return state;
  }
};
