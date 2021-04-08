import React from 'react';
import style from './nav-button.module.css';
import Button from "./button";
import cN from 'classnames';

const NavButton = ({notify, selected, children,className, ...props}) => {
    return (
        <Button className={cN( style.navButton, selected && style.navButtonSelected, className)} {...props}>
            {notify > 0 && <span className={style.notify}>{notify}</span>}
            {children}
        </Button>
    )
}
export default NavButton;