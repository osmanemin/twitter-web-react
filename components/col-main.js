import React from "react";
import style from './col-main.module.css';
import cn from 'classnames';

const ColMain = ({children}) => {
    return (
        <div className={cn(style.main)}>
            {children}
        </div>

    )
}
export default ColMain;