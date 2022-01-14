import NumberParse from "./NumberParse";

/*
    Converts a string to a date. 
    If the value cannot be converted to a date, 
    it will return the same value

*/
function DateParse(value: string): string
{
    if (NumberParse(value))
    {
        return value;
    }
    else
    {
        let isDate: number = Date.parse(value);
        if (!isNaN(isDate))
        {
            value = new Date(value).toLocaleDateString();
        }
        return value;
    }
    
}

export default DateParse;