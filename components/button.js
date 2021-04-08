import React from 'react';
import style from './button.module.css';
import cN from 'classnames';


const Button = ({ full = false, children, className, ...props}) => {
    return (
        <button type="button" className={cN(full && style.fullWidth  , style.button, className)} {...props}>
            {children}
        </button>
    )
}
export default Button;