/**
 * Created by chenzhongying on 2017/12/11.
 */
module.exports = {
    path: 'goods',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('../goods/component').default)
        })
    }
};