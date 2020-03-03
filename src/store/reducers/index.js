import {combineReducers} from 'redux';

import testState from './test.reducer'
import modalState from './modal.reducer'

export default () => combineReducers({
  testState,
  modalState,
})