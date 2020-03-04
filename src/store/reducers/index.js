import {combineReducers} from 'redux';

import newsState from './news.reducer'
import modalState from './modal.reducer'

export default () => combineReducers({
  newsState,
  modalState,
})