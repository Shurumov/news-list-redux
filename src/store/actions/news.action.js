export const NEWS_ACTION_TYPES = {
  NEWS_SET_STATE: 'NEWS_SET_STATE',
  NEWS_CHANGE_PROCESSING_STATE: 'NEWS_CHANGE_PROCESSING_STATE',
};

export const setData = news => ({
  type: NEWS_ACTION_TYPES.NEWS_SET_STATE,
  payload: news
});

export const changeNewsProcessing = (state) => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_CHANGE_PROCESSING_STATE,
    payload: state,
  };
};

export function getData(methodUrl) {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeNewsProcessing(true));

    const response = await axios.get(methodUrl);

    dispatch(changeNewsProcessing(false));

    if (!response) {
      return response;
    }

    dispatch(setData(response));

    return response;
  };
}