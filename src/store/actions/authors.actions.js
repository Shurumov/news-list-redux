export const AUTHOR_ACTION_TYPES = {
  AUTHOR_SET_AUTHORS: 'AUTHOR_SET_AUTHORS',
  AUTHOR_SET_SELECTED: 'AUTHOR_SET_SELECTED',
  AUTHOR_CHANGE_PROCESSING_STATE: 'AUTHORS_CHANGE_PROCESSING_STATE',
};

export const setData = authors => ({
  type: AUTHOR_ACTION_TYPES.AUTHOR_SET_AUTHORS,
  payload: authors
});

export const setSelectedAuthor = id => ({
  type: AUTHOR_ACTION_TYPES.AUTHOR_SET_SELECTED,
  payload: id ? id: ''
});

export const changeAuthorProcessing = (state) => {
  return {
    type: AUTHOR_ACTION_TYPES.AUTHOR_CHANGE_PROCESSING_STATE,
    payload: state,
  };
};

export function getData(methodUrl) {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeAuthorProcessing(true));

    const response = await axios.get(methodUrl);

    dispatch(changeAuthorProcessing(false));

    if (!response) {
      return response;
    }

    dispatch(setData(response));

    return response;
  };
}