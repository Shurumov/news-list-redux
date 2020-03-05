import {MODAL_ACTION_TYPES} from 'store/actions/modal.actions';
import React from "react";

const initialState = {
  Node: () => <div/>,
  title: '',
  isShow: false,
};

export default function (state = initialState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case MODAL_ACTION_TYPES.MODAL_SHOW_MODAL:
      return {...state, ...payload};
    case MODAL_ACTION_TYPES.MODAL_HIDE_MODAL:
      return {...initialState};
    default:
      return state;
  }
}