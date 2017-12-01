/**
 * Created by chenzhongying on 2017/11/15.
 */
module.exports = {
    path: 'machine',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('../machine/component').default)
        })
    }
};