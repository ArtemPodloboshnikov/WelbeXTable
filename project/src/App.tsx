import React, {useEffect, useState } from 'react';

import './App.css';
import constants, {COUNT_PAGES_STORAGE} from './constants';
import Search from './functions/Search';
import Select from './components/Select/Select';
import Input from './components/Input/Input';
import Table from './components/Table/Table';
import Pages from './components/Pages/Pages';


function App() {

  const [valueColumn, setValueColumn] = useState<string>("");
  const [valueCondition, setValueCondition] = useState<string>("");
  const [valueSearchInput, setValueSearchInput] = React.useState<string>("");
  const [tableData, setTableData] = useState<{[key: string]: string}[]>([{}]);
  const [page, setPage] = useState<number>(1);

  useEffect(()=>{

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
      
    

  }, [valueSearchInput, valueCondition, valueColumn])

  useEffect(()=>{

    const controller = new AbortController();
    const signal = controller.signal;

    async function getPageData()
    {
      console.log(constants.QUERIES.pageData + page)
      const res = await fetch(constants.QUERIES.pageData + Number(localStorage.getItem(COUNT_PAGES_STORAGE)), {signal: signal})
      const json = await res.json();
      localStorage.setItem(constants.TABLE_STORAGE, JSON.stringify(json))
      console.log(json)
      setTableData(json);
    }

    async function getCountData()
    {
      const res = await fetch(constants.QUERIES.getCount, {signal: signal})
      let count_data: string = await res.text();
      let count_pages = Number(count_data.replaceAll(`"`, '')) / 5;
      console.log(Math.ceil(count_pages))
      localStorage.setItem(COUNT_PAGES_STORAGE, String(Math.ceil(count_pages)))
    }

    getCountData();
    getPageData();

    return ()=> controller.abort();


  }, [page])

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
      <Pages
      current_page={page}
      onChange={setPage}
      />
    </>
  );
}

export default App;
