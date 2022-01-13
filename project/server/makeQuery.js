const pg = require('pg');

function createNewClient() {
    return new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'WelbeX',
        password: 'master',
        port: 5432
    });
}

function makeQuery(query, callback) {
    const client = createNewClient();
    client.connect();

    client.query(query, (err, res) => {
        console.log(res.rows)
        client.end();
        callback(res.rows);
    });
}

module.exports = makeQuery;