import React from 'react';
import style from './nav-button.module.css';
import Button from "./button";
import cN from 'classnames';

const NavButton = ({notify,selected, children, ...props}) => {
    return (
        <Button className={cN(style.navButton, selected && style.navButtonSelected)} {...props}>
            {notify && <span className={style.notify}>{notify}</span>}
            {children}
        </Button>
    )
}
export default NavButton;