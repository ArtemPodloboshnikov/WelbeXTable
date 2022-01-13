import {OPERATORS} from "../constants";
import NumberParse from "./NumberParse";

type SearchType = {

    data: {[key: string]: string}[], 
    search_word: string, 
    condition: string, 
    column: string

}

type MoreAndLessType = Omit<SearchType, "data"|"condition"> 
& {value: {[key: string]: string}, operator: OPERATORS.MORE|OPERATORS.LESS}

function Search ({data, search_word, condition, column}:SearchType): {[key: string]: string}[]
{
    switch (condition)
    {
        case OPERATORS.EQUALLY:
        {
            const postfix = ((NumberParse(search_word))?'$':'')
            const regexp = new RegExp(`^${search_word}${postfix}`, 'i');
            return data.filter((value)=>{
                
                console.log(value[column])
                return (regexp.test(value[column]))
    
            })
        }
        case OPERATORS.MORE:
        {
            return data.filter(value=>{
                
                return MoreAndLess({
                    
                    column: column, 
                    search_word: search_word, 
                    value: value, 
                    operator: OPERATORS.MORE
                })
                

            })
           
        }
        case OPERATORS.LESS:
        {
            return data.filter(value=>{
                
                return MoreAndLess({
                    column: column, 
                    search_word: search_word, 
                    value: value, 
                    operator: OPERATORS.LESS
                })
                

            })
           
        }
        default:
        {
            return data;
        }
    }
}

function MoreAndLess({column, search_word, value, operator}:MoreAndLessType)
{
    const value_num: number|boolean = NumberParse(value[column]);
    const search_word_num: number|boolean = NumberParse(search_word);

    if (value_num && search_word_num)
    {
        let more_and_less = {

            [OPERATORS.MORE]: ()=>{

                if (value_num > search_word_num)
                {
                    return true;
                }

                return false;
            },
            [OPERATORS.LESS]: ()=>{

                if (value_num < search_word_num)
                {
                    return true;
                }

                return false;
            }
        }
        console.log(more_and_less[operator]())
        return more_and_less[operator]();
    }
}

export default Search;