import React, {useEffect, useState } from 'react';

import './App.css';
import constants from './constants';
import Search from './functions/Search';
import Select from './components/Select/Select';
import Input from './components/Input/Input';
import Table from './components/Table/Table';


function App() {

  const [valueColumn, setValueColumn] = useState<string>("");
  const [valueCondition, setValueCondition] = useState<string>("");
  const [valueSearchInput, setValueSearchInput] = React.useState<string>("");
  const [tableData, setTableData] = useState<{[key: string]: string}[]>([{}]);

  const table_titles: string[] = Object.values(constants.COLUMNS.titles);
  const condition_signs: string[] = Object.values(constants.CONDITION.values)

  useEffect(()=>{
    
    const controller = new AbortController();
    const signal = controller.signal;

    async function getAll()
    {
      const res = await fetch(constants.QUERIES.all, {signal: signal})
      const json = await res.json();
      localStorage.setItem(constants.TABLE_STORAGE, JSON.stringify(json))
      setTableData(json);
    }

    if (JSON.stringify(tableData[0]) == '{}')
    {
      getAll();

    }
    else
    {


      const data: {[key: string]: string}[] = JSON.parse(String(localStorage.getItem(constants.TABLE_STORAGE)));
        setTableData(Search({
          data: data, 
          search_word: valueSearchInput, 
          condition: valueCondition, 
          column: valueColumn
        }))
        console.log(valueSearchInput)
        console.log(valueCondition)
        console.log(valueColumn)
      
    }
    return ()=> controller.abort();

  }, [valueSearchInput, valueCondition, valueColumn])

  return (
    <>
      <header className="header">
          <Select
          name={constants.COLUMNS.name}
          options={constants.COLUMNS.titles}
          placeholder={constants.COLUMNS.placeholder}
          value={valueColumn}
          onChange={setValueColumn}
          />

          <Select
          name={constants.CONDITION.name}
          options={constants.CONDITION.values}
          placeholder={constants.CONDITION.placeholder}
          value={valueCondition}
          onChange={setValueCondition}
          />

          <Input
          name={constants.SEARCH.name}
          placeholder={constants.SEARCH.placeholder}
          onChange={setValueSearchInput}
          value={valueSearchInput}
          />
      </header>
      <Table
      data={[{...constants.COLUMNS.titles},
            ...tableData]}
      />
    </>
  );
}

export default App;
