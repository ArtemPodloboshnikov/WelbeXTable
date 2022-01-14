import React from 'react';

import Props from './Props';
import classes from './Table.module.css';
import DateParse from '../../functions/DateParse';

const Table: React.FC<Props> = ({data}) => {

    const columns_names: string[] = Object.keys(data[0]);
    const count_columns: number = columns_names.length;

    let columns: any = [];
    let rows: any = [];

    for (let i = 0; i < data.length; i++)
    {
        for (let j = 0; j < count_columns; j++){
            
            if (i == 0)
            {
                columns.push(<th key={`${i}_${j}`}>{data[i][columns_names[j]]}</th>)
            }
            else
            {
                let value: string = DateParse(data[i][columns_names[j]]);
                
                columns.push(<td key={`${i}_${j}`}>{value}</td>)

            }
            
        }

        rows.push(<tr key={`row_${i}`}>{columns}</tr>);
        columns = [];
    }

    return (

        <table className={classes.table}>
            {rows}
        </table>

    )
}

export default Table;

