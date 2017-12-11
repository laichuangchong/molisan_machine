/**
 * Created by chenzhongying on 2017/11/15.
 */

import { createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import tabBar from './reducers/tabBar';
import locations from './reducers/locations';

const reducer = combineReducers({
    'tabBar':tabBar,
    'locations':locations
});
const store = createStore(reducer,applyMiddleware(thunk));
export default store;