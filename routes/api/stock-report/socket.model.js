const bookshelf = require('../../../config/knex');

module.exports = bookshelf.model('stocks', {
    tableName: 'stocks',
    idAttribute: 'Symbol',
}, {
    getSymbol: getSymbol
});
function getSymbol(args) {
    if (!args) throw new Error("invalid function call: fetchAll");
    return this.query(qb => {
        qb.where(args);
    }).fetch().then(model => model.toJSON())
}
