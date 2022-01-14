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
        
        console.log(res)
        let answer;
        if (res !== undefined)
        {
            answer = res.rows;
            if (answer.length != 0)
            {
                if (answer[0].count !== undefined)
                {
                    answer = answer[0].count
                }
            }
            else
            {
                answer = [null];
            }
        }
        else
        {
            answer = [null];
        }
        client.end();
        if (err)
            console.log(err)
        callback(answer);
    });
}

module.exports = makeQuery;