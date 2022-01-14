import { COUNT_DATA_PAGE, COUNT_PAGES_STORAGE, ERROR_MESSAGE, 
         LAST_PAGE_STORAGE, QUERIES, TABLE_STORAGE, OPERATORS, COLUMNS_NAME } from "../constants";
import additionalParameters from "./additionalParameters";
import NumberParse from "./NumberParse";

export type UpdateArguments = {

    readonly tableData: {
        [key: string]: string;
    }[],
    readonly setTableData: React.Dispatch<React.SetStateAction<{
        [key: string]: string;
    }[]>>,
    readonly page: number,
    readonly valueColumn: string,
    readonly valueCondition: string,
    readonly valueSearchInput: string
}

/*
    This is a function for useEffect that updates the table 
    when you go to the page and also searches by DB if the 
    search on the current page fails

*/
function UpdateTable({tableData, setTableData, page, 
                     valueColumn, valueCondition, valueSearchInput}:UpdateArguments)
{
    const controller = new AbortController();
    const signal = controller.signal;

    async function getPageData()
    {
      try
      {
        const res = await fetch(
        additionalParameters(QUERIES.pageData, 
          {offset: ((page * COUNT_DATA_PAGE) - COUNT_DATA_PAGE)}
        ), 
        {signal: signal}
        )
        const db_data = await res.json();
        localStorage.setItem(TABLE_STORAGE, JSON.stringify(db_data))
        localStorage.setItem(LAST_PAGE_STORAGE, String(page));
        console.log(db_data)
        setTableData(db_data);
      }
      catch(e)
      {
        console.log(e)
      }
    }

    async function searchInDB()
    {
      if (valueColumn != '' && valueSearchInput != '')
      {
        try
        {
        
          let res;

          if (OPERATORS.EQUALLY == valueCondition &&
              !NumberParse(valueSearchInput))
          {

              res = await fetch(
                additionalParameters(QUERIES.searchDataEqually, 
                  {column: valueColumn, value: valueSearchInput}),
                {signal: signal}
              )
          }
          else
          {
            
        
            res = await fetch(
                additionalParameters(QUERIES.searchDataMoreLess, 
                    {column: valueColumn, value: valueSearchInput, condition: valueCondition}),
                {signal: signal}
                )
            

          }
          let fields: {[key: string]: string}[] = await res.json();
          console.log(fields)
          if (fields[0] === null)
          {
            fields = [ERROR_MESSAGE];
          }
        
          setTableData(fields);
        }
        catch(e)
        {
          console.log(e)
        }

      }
    }
    async function getCountData()
    {
      try
      {
        const res = await fetch(QUERIES.getCount, {signal: signal})
        let count_data: string = await res.text();
        let count_pages = Number(count_data.replaceAll(`"`, '')) / COUNT_DATA_PAGE;
        console.log(Math.ceil(count_pages))
        localStorage.setItem(COUNT_PAGES_STORAGE, String(Math.ceil(count_pages)))
      }
      catch(e)
      {
        console.log(e)
      }
    }

    if (JSON.stringify(tableData[0]) == '{}' || 
        page != Number(localStorage.getItem(LAST_PAGE_STORAGE)))
    {
      console.log(JSON.stringify(tableData[0]))
      getCountData();
      getPageData();

    }
    else if (tableData[0] === undefined)
    {
      searchInDB();
    }
   
    return ()=> controller.abort();
}

export default UpdateTable;
