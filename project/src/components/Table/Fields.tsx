import React from 'react';

import {FieldsProps} from './Props';

const Fields: React.FC<FieldsProps> = ({data, columns_names, count_columns}) => {
    
    let columns: any = [];
    let rows: any = [];

    for (let i = 0; i < data.length; i++)
    {
        for (let j = 0; j < count_columns; j++){
            
            if (i == 0)
            {

                columns.push(<th>{data[i][columns_names[j]]}</th>)
            }
            else
            {
                columns.push(<td>{data[i][columns_names[j]]}</td>)

            }
            
        }

        rows.push(<tr>{columns}</tr>);
        columns = [];
    }

    return rows;
}

export default Fields;