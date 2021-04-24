
import {createStore, Store} from 'redux'
import state from '../reducers/state'

const store = createStore(state);
export default store;

