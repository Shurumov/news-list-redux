import { MODAL_ACTION_TYPES } from 'store/actions/modal.action';

const initialState = {
  description: '',
  title: '',
  isShow: false,
};

export default function(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case MODAL_ACTION_TYPES.MODAL_SHOW_MODAL:
      return {...state, ...payload};
    case MODAL_ACTION_TYPES.MODAL_HIDE_MODAL:
      return {...state, modal: initialState.modal, isShow: false};
    default:
      return state;
  }
}