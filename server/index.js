const http = require('http');
const url = require('url');

const constants = require('./constants');
const makeQuery = require('./makeQuery');
const additionalParameters = require('./additionalParameters');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    
    for (let route of Object.keys(constants.REQUEST))
    {
        urlRequest = url.parse(req.url, true);
    
        if (urlRequest.pathname == `/${route}`)
        {
            makeQuery(additionalParameters(route, urlRequest.query), (data)=>{

                res.writeHead(200);
                res.end(JSON.stringify(data));
                
            })
        }
    }

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});