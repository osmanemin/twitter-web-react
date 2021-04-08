import React from "react";
import style from './theme-select.module.css';

const ThemeSelect = () => {
    return (
        <div className={style.container}>
            <input type="radio" value="light" name="theme" checked/>
            <input type="radio" value="light" name="theme"/>
            <input type="radio" value="light" name="theme"/>
        </div>
    )
}
export default ThemeSelect;