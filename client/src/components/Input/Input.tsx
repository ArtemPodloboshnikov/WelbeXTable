import React, {useState} from 'react';
import Props from './Props';
import classes from './Select.module.css';

const Select: React.FC<Props> = ({placeholder, value, onChange, name}) =>{
    

    return (

       <input 
       placeholder={placeholder}
       value={value}
       onChange={(e)=>onChange(e.target.value)}
       name={name}
       />
    )
}

export default Select;