import React, { ReactNode } from 'react';

import Props from './Props';
import classes from './Table.module.css';
import DateParse from '../../functions/DateParse';

const Table: React.FC<Props> = ({data, name}) => {

    const columns_names: string[] = Object.keys(data[0]);
    const count_columns: number = columns_names.length;

    let columns: ReactNode[] = [];
    let rows: ReactNode[] = [];

    for (let i = 0; i < data.length; i++)
    {
        for (let j = 0; j < count_columns; j++){
            
            if (i == 0)
            {
                columns.push(<th key={`${name}_${i}_${j}`}>{data[i][columns_names[j]]}</th>)
            }
            else
            {
                let value: string = DateParse(data[i][columns_names[j]]);
                
                columns.push(<td key={`${name}_${i}_${j}`}>{value}</td>)

            }
            
        }
        if (i == 0)
        {
            rows.push(
                <thead key={`head_${name}`}>
                    <tr key={`${name}_${i}`}>
                        {columns}
                    </tr>
                </thead>
            );
        }
        rows.push(<tr key={`${name}_${i}`}>{columns}</tr>);
        columns = [];
    }
    
    rows = [rows[0], <tbody key={`body_${name}`}>{rows.slice(2)}</tbody>]

    return (

        <table className={classes.table}>
            {rows}
        </table>

    )
}

export default Table;

