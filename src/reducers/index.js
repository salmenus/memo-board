import { combineReducers } from 'redux';
import memos from './memos';

const reducers = combineReducers({
  memo: memos
});

export default reducers;
