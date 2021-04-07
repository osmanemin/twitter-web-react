import React from 'react';
import style from './button.module.css';
import cN from 'classnames';


const Button = ({children, className, ...props}) => {
    return (
        <button type="button" className={cN(className, style.button)} {...props}>
            {children}
        </button>
    )
}
export default Button;