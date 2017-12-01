/**
 * Created by chenzhongying on 2017/10/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import styles
import 'weui';
import {Provider,connect} from 'react-redux';
import {Router, Route, IndexRoute, Link, browserHistory,hashHistory, Location} from 'react-router';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import store from './src/store';
import './src/static/css/common.css';


const url = '';
const routes = [
    {
        path: url + '/',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/login/component').default)
            })
        }
    },
    {
        path: url + '/home',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/home/component').default)
            })
        },
        getChildRoutes(location, callback) {
            require.ensure([], function (require) {
                callback(null, [
                    require('./src/routes/subscription'),
                    require('./src/routes/advertisement'),
                    require('./src/routes/machine')
                ])
            })
        },
        getIndexRoute(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/routes/subscription'))
            })
        }
    },
    {
        path: url + '/subscription/edit/:id',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/subscription/add').default)
            })
        }
    },
    {
        path: url + '/subscription/add',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/subscription/add').default)
            })
        }
    },
    {
        path: url + '/advertisement/edit(/:id)',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/advertisement/add').default)
            })
        }
    },
    {
        path: url + '/advertisement/add',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/advertisement/add').default)
            })
        }
    },
    {
        path: url + '/machine/add(/:id)',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/machine/add').default)
            })
        }
    },
    {
        path: url + '/machine/edit/:id',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/machine/add').default)
            })
        }
    },
    {
        path: url + '/*',
        getComponents(location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./src/404/component').default)
            })
        }
    }
];

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory} routes={routes}/>
            </Provider>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
