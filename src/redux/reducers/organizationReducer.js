const initialState = {
  isLoading: false,
  campaigns: [],
  error: null,
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CREATE':
      return { ...state, isLoading: true };
    case 'CREATED_CAMPAIGN':
      return {
        ...state,
        isLoading: false,
        campaigns: [...state.campaigns, action.payload],
      };
    case 'ADD_ITEMS_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
