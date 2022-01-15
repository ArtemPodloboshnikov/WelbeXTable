import React, {useEffect, useState } from 'react';

import './App.css';
import constants, {COLUMNS_NAME} from './constants';
import UpdateTableEffect from './functions/UpdateTableEffect';
import SearchEffect from './functions/SearchEffect';
import Select from './components/Select/Select';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Table from './components/Table/Table';
import Pages from './components/Pages/Pages';


function App() {

  const [valueColumn, setValueColumn] = useState<string>("");
  const [valueCondition, setValueCondition] = useState<string>("");
  const [valueSearchInput, setValueSearchInput] = React.useState<string>("");
  const [tableData, setTableData] = useState<{[key: string]: string}[]>([{}]);
  const [page, setPage] = useState<number>(1);

  useEffect(SearchEffect({

    setTableData,
    valueColumn,
    valueCondition,
    valueSearchInput

  }), [valueSearchInput, valueCondition, valueColumn])

  useEffect(UpdateTableEffect({
    tableData,
    setTableData,
    page,
    valueColumn,
    valueCondition,
    valueSearchInput

  }), [page, tableData])

  return (
    <>
      <header className="header">
          <Button
          name={constants.RESET.name}
          text={constants.RESET.text}
          onClick={()=>{

            setTableData([{}]);
            setValueColumn('');
            setValueCondition('');
            setValueSearchInput('');
          }}
          />

          <Select
          name={constants.COLUMNS.name}
          options={constants.COLUMNS.titles}
          placeholder={constants.COLUMNS.placeholder}
          value={valueColumn}
          onChange={setValueColumn}
          exception={COLUMNS_NAME.DATE}
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
      name={constants.TABLE.name}
      />
      <Pages
      current_page={page}
      onChange={setPage}
      />
    </>
  );
}

export default App;
