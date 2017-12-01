/**
 * Created by chenzhongying on 2017/11/15.
 */
module.exports = {
    path: 'subscription',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('../subscription/component').default)
        })
    }
};