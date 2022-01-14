import React from 'react';

import Props from './Props';
import { COUNT_PAGES_STORAGE } from '../../constants';
import classes from './Pages.module.css';

const Pages: React.FC<Props> = ({current_page, onChange}) => {

    let pages = [];

    for (let i = 0; i < Number(localStorage.getItem(COUNT_PAGES_STORAGE)); i++)
    {
        const page = i + 1;
        pages.push(
            <button 
            key={`page_${page}`} 
            onClick={()=>{

                onChange(page)
            }}
            className={(current_page == page)?classes.active_page:''}
            >
                {page}
            </button>
        )
    }

    return (

        <div className={classes.pages}>
            {pages}
        </div>

    )
    
}

export default React.memo(Pages);