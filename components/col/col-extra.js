import React from "react";
import style from './col-extra.module.css';
import cn from 'classnames';

const ColExtra = ({children}) => {
    return (
        <div className={cn(style.extra)}>
            {children}
        </div>

    )
}
export default ColExtra;