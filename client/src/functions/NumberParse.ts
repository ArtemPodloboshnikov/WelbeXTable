/*
    Checks if the string is a number, if yes, it will 
    return a number otherwise it will return false

*/
function NumberParse (value: string): number | boolean
{
    let new_value = Number(value);
    if (new_value)
    {
        return new_value;
    }
    
    return false;
    
}

export default NumberParse;