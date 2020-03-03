import {TEST_ACTION, TEST_ACTION_2} from 'store/actions/test.action'

const initialState = {
  testState: true,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case TEST_ACTION:
      return {
        ...state,
        testState: payload,
      };
    case TEST_ACTION_2:
      return {
        ...state,
        testState: payload,
      };
    default:
      return state;
  }

}