import React, {useContext, useState} from "react";
import style from './theme-select.module.css';
import {StoreContext} from "../store";

const THEME = {
    light: 'Light',
    dim: 'Dim',
    dark: 'Dark'
}

const ThemeSelect = () => {

    const store = useContext(StoreContext);

    return (
        <div className={style.container}>
            {["light", "dim", "dark"].map(theme => (
                <label key={theme} className={style.label}>
                    <input type="radio" value={theme} name="theme"
                           checked={store.theme === theme}
                           onChange={e => store.setTheme(e.target.value)}/>
                    {THEME[theme]}
                </label>
            ))}
        </div>
    )
}
export default ThemeSelect;