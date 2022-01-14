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
    console.log(query)
    client.query(query, (err, res) => {
        
        let answer = res.rows;
        if (answer[0].count !== undefined)
        {
            answer = answer[0].count
        }
        client.end();
        if (err)
            console.log(err)
        callback(answer);
    });
}

module.exports = makeQuery;