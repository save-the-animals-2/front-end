import {
  UPDATE_CAMPAIGN_START,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_ERROR,
  DELETE_ITEMS_START,
  DELETE_ITEMS_SUCCESS,
  DELETE_ITEMS_ERROR,
  FETCH_USER_ITEMS_START,
  FETCH_USER_ITEMS_SUCCESS,
  FETCH_USER_ITEMS_ERROR,
} from '../actions/organizationActions';

const initialState = {
  isLoading: false,
  campaigns: [],
  error: null,
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN_START:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        userBio: action.payload,
        isLoading: false,
      };
    case UPDATE_CAMPAIGN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_ITEMS_SUCCESS:
      return {
        ...state,
        deletedItem: action.payload,
        isLoading: false,
      };
    case DELETE_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
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
