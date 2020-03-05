import {combineReducers} from 'redux';

import modalState from './modal.reducer'
import newsState from './news-list.reducer'
import selectNewsState from './news.reducer'
import authorState from './authors.reducer'

export default () => combineReducers({
  newsState,
  selectNewsState,
  modalState,
  authorState,
})