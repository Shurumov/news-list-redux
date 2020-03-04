import {AUTHOR_ACTION_TYPES} from 'store/actions/authors.actions'

const initialState = {
  authors: [],
  selectedAuthorId: '',
  processing: true,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case AUTHOR_ACTION_TYPES.AUTHOR_CHANGE_PROCESSING_STATE:
      return {
        ...state,
        processing: payload,
      };
    case AUTHOR_ACTION_TYPES.AUTHOR_SET_SELECTED:
      return {
        ...state,
        selectedAuthorId: payload,
      };
    case AUTHOR_ACTION_TYPES.AUTHOR_SET_AUTHORS:
      return {
        ...state,
        authors: payload,
      };
    default:
      return state;
  }

}