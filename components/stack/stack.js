import React from "react";
import style from './stack.module.css';
import cn from 'classnames';

const Stack = ({gap = 10, column = false, children}) => {
    return (
        <div
            style={{"--gap" : `${gap}px`}}
            className={cn(style.stack, column && style.column)}>
            {children}
        </div>

    )
}
export default Stack;