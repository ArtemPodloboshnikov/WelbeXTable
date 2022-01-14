const constants = require('./constants');


/*
    Adds various parameters to the DB query. 
    Returns a request with parameters
*/
function additionalParameters(pathname, query){

    const query_parameters = constants.QUERY[pathname];
    let request = String(constants.REQUEST[pathname]);

    if (query_parameters !== undefined)
    {
        for (let parameter of query_parameters)
        {
            const regexp = new RegExp(`_${parameter}_`);
            request = request.replace(regexp, query[parameter])
        }
    }
    
    console.log(request);
    return request;

}

module.exports = additionalParameters;