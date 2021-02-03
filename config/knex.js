const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'sql12.freesqldatabase.com',
        user: 'sql12390454',
        password: 'WgiUlv8iP7',
        database: 'sql12390454'
    }
});
module.exports= require('bookshelf')(knex);