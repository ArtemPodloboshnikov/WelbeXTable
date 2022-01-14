const http = require('http');
const url = require('url');

const constants = require('./constants');
const makeQuery = require('./makeQuery');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    
    for (let [route, query] of Object.entries(constants.REQUEST))
    {
        urlRequest = url.parse(req.url, true);
        console.log(urlRequest)
        if (urlRequest.pathname == `/${route}`)
        {
            makeQuery(query + ((urlRequest.query.offset !== undefined)?urlRequest.query.offset:''), (data)=>{

                res.writeHead(200);
                res.end(JSON.stringify(data));
                
            })
        }
    }

    // res.writeHead(200);
    // res.end(JSON.stringify({'mes': 'Hey!'}));

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});