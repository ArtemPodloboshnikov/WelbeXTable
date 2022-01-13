const http = require('http');

const constants = require('./constants');
const makeQuery = require('./makeQuery');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
 
    switch (req.url)
    {
        case constants.URLS.getAll:
        {
            makeQuery(constants.REQUEST.getAll, (data)=>{

                res.writeHead(200);
                res.end(JSON.stringify(data));
                
            })
            break;
        }
        default:
        {
            res.writeHead(200);
            res.end(JSON.stringify({'mes': 'Hey!'}));
        }   
    
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});