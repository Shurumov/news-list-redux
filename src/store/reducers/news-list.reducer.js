import {NEWS_LIST_ACTION_TYPES} from 'store/actions/news-list.actions'

const initialState = {
  newsList: [],
  processing: true,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case NEWS_LIST_ACTION_TYPES.NEWS_LIST_CHANGE_PROCESSING_STATE:
      return {
        ...state,
        processing: payload,
      };
    case NEWS_LIST_ACTION_TYPES.NEWS_LIST_SET_STATE:
      return {
        ...state,
        newsList: payload,
      };
    default:
      return state;
  }

}