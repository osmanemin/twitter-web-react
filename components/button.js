import React from 'react';
import style from'./button.module.css';
const Button = ({children}) =>{
    return <button type="button" className={style.button}>{children}</button>
}
export default Button;