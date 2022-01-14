import NumberParse from "./NumberParse";

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