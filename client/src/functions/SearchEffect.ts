import Search from "./Search";
import { TABLE_STORAGE } from "../constants";
import { UpdateArguments } from "./UpdateTableEffect";

type SearchArguments = Omit<UpdateArguments, 'page'|'tableData'>

function SearchEffect({setTableData, valueColumn,
                       valueCondition, valueSearchInput}:SearchArguments)
{
    return ()=>{

        if (valueSearchInput != '' &&
            valueCondition != '' &&
            valueColumn != '')
        {

            const data: {[key: string]: string}[] = JSON.parse(String(localStorage.getItem(TABLE_STORAGE)));
            
            setTableData(Search({
            data: data, 
            search_word: valueSearchInput, 
            condition: valueCondition, 
            column: valueColumn
            }))
        }

    }

}

export default SearchEffect;