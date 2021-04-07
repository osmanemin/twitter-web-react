import React from "react";
import style from './layout.module.css';
import cn from 'classnames';

const Layout = ({children}) => {
    return (
        <div className={cn(style.layout)}>
            {children}
        </div>

    )
}
export default Layout;