import React, {useState} from 'react';
import Props from './Props';
import classes from './Select.module.css';

const Select: React.FC<Props> = ({placeholder, onChange, name, options, value, exception}) =>{
    
    const formValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value.trim());
    };

    return (

        <select
        className={classes.select} 
        value={value}
        onChange={formValue}
        name={name}
        >
            <option disabled={true} key={`${name}_placeholder`} value="">{placeholder}</option>
            {Object.keys(options).map((option_name)=>{
                
                if (exception !== option_name)
                {
                    return <option key={`${name}_${option_name}`} 
                    value={option_name}>
                        {options[option_name]}
                    </option>
                }
            
            })}
        </select>
    )
}

export default React.memo(Select);