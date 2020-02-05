export const initialState = {
  campaigns: [],
  isLoading: false,
};

export const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CAMPAIGNS':
      return { ...state, isLoading: true };
    case 'FETCHING_CAMPAIGNS_SUCCESSFUL':
      return { ...state, isLoading: false, campaigns: action.payload };
    default:
      return state;
  }
};
