export const NEWS_ACTION_TYPES = {
  NEWS_SET_STATE: 'NEWS_SET_STATE',
  NEWS_CHANGE_PROCESSING_STATE: 'NEWS_CHANGE_PROCESSING_STATE',
  NEWS_CLEAR_STATE: 'NEWS_CLEAR_STATE',
};

export const setData = ({key, data}) => ({
  type: NEWS_ACTION_TYPES.NEWS_SET_STATE,
  payload: {key, data}
});
export const changeNewsProcessing = (state) => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_CHANGE_PROCESSING_STATE,
    payload: state,
  };
};

export function getData(methodUrl, key) {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeNewsProcessing(true));

    const response = await axios.get(methodUrl);

    dispatch(changeNewsProcessing(false));

    if (!response) {
      return response;
    }

    dispatch(setData({
      key: key,
      data: response,
    }));

    return response;
  };
}

export const clearState = () => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_CLEAR_STATE,
  };
};