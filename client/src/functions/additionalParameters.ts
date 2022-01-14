/*
    Generates a GET request by adding parameters to it
*/
function additionalParameters(request: string, parameters: object): string
{
    for (const [parameter, value] of Object.entries(parameters))
    {
        const regexp = new RegExp(`_${parameter}_`);
        request = request.replace(regexp, value);
    }
    console.log(request)
    return request
}

export default additionalParameters;