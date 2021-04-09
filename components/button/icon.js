import React from 'react';
import style from './button.module.css';
import cN from 'classnames';
import Button from "./button";


const IconButton = ({children, className, ...props}) => {
    return (
        <Button className={cN(style.iconButton, className)} {...props}>
            {children}
        </Button>
    )
}
export default IconButton;