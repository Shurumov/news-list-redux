import { NEWS_ACTION_TYPES } from "store/actions/news.actions";

const initialState = {
  newsId: '',
  newsData: {},
  commentsData: [],
  processing: true,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case NEWS_ACTION_TYPES.NEWS_CHANGE_PROCESSING_STATE:
      return {
        ...state,
        processing: payload,
      };
    case NEWS_ACTION_TYPES.NEWS_SET_STATE:
      return {
        ...state,
        [payload.key]: payload.data,
      };
    case NEWS_ACTION_TYPES.NEWS_CLEAR_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }

}