import React from 'react';
import style from './button.module.css';
import cN from 'classnames';
import Link from 'next/link'


const LinkButton = ({href, children, ...props}) => {
    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    )
}

const BaseButton = ({children, ...props}) => {
    return (
        <button type="button" {...props}>
            {children}
        </button>
    )
}

const Button = ({full = false, children, className, ...props}) => {
    const Comp = props.href ? LinkButton : BaseButton;
    return (
        <Comp className={cN(full && style.fullWidth, style.button, className)} {...props}>
            {children}
        </Comp>
    )
}
export default Button;