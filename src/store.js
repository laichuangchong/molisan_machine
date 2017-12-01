/**
 * Created by chenzhongying on 2017/11/15.
 */

import { createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import tabBar from './reducers/tabBar';

const reducer = combineReducers({
    'tabBar':tabBar
});
const store = createStore(reducer,applyMiddleware(thunk));
export default store;