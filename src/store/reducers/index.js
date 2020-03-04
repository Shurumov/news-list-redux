import {combineReducers} from 'redux';

import newsState from './news.reducer'
import modalState from './modal.reducer'
import authorState from './authors.reducer'

export default () => combineReducers({
  newsState,
  modalState,
  authorState,
})