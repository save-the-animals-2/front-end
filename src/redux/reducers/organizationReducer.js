import {
  FETCH_USER_ITEMS_START,
  FETCH_USER_ITEMS_SUCCESS,
  FETCH_USER_ITEMS_ERROR,
} from '../actions/organizationActions';

const initialState = {
  isLoading: false,
  campaigns: [
    {
      id: '',
      title: '',
      description: '',
      photo_url: '',
      location: '',
      species: '',
      urgency_level: '',
      funding_goal: '',
      deadline: '',
      org_id: '',
      org_name: '',
    },
  ],
  error: null,
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaigns: action.payload,
      };
    case FETCH_USER_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
