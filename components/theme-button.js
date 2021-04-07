import React from 'react';
import style from './theme-button.module.css';
import Button from "./button";
import cN from 'classnames';

const ThemeButton = ({className, big = false, children, ...props}) => {
    return (
        <Button className={cN(style.button, big && style.bigButton, className)} {...props}>
            {children}
        </Button>
    )
}
export default ThemeButton;