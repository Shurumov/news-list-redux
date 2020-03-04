export const MODAL_ACTION_TYPES = {
  MODAL_SHOW_MODAL: 'MODAL_SHOW_MODAL',
  MODAL_HIDE_MODAL: 'MODAL_HIDE_MODAL',
};

export function showModal({title, description}) {
  return {
    type: MODAL_ACTION_TYPES.MODAL_SHOW_MODAL,
    payload: {title, description, isShow: true},
  };
}

export function hideModal() {
  return {
    type: MODAL_ACTION_TYPES.MODAL_HIDE_MODAL,
  };
}