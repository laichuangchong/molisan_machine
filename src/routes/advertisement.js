/**
 * Created by chenzhongying on 2017/11/15.
 */
module.exports = {
    path: 'advertisement',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('../advertisement/component').default)
        })
    }
};