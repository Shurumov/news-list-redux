export const TEST_ACTION = "TEST_ACTION";
export const TEST_ACTION_2 = "TEST_ACTION_2";

export const testAction = id => ({
  type: TEST_ACTION,
  payload: {
    id,
  }
});