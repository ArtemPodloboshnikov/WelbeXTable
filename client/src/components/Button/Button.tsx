import React from "react";

import Props from "./Props";
import classes from './Button.module.css';

const Button:React.FC<Props> = ({name, text, onClick}) => {

    return (

        <button
        className={classes.button}
        name={name}
        onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button