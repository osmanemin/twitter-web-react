import React from 'react';
import NavButton from "./nav-button";
import TextTitle from "./text-title";


import style from './navigation.module.css';
import {MENU} from "../constants";

const Navigation = ({flat = false, selectedKey='home'}) => {



    return (
        <nav className={style.nav}>
            {/*
            const selected = router.pathname === menu.path
            */}
            {MENU.map(menu => {
                const showTitle = !flat && menu.title.length > 0;
                const selected = selectedKey === menu.key;
                return (
                    <NavButton
                        key={menu.key}
                        notify={menu.notify}
                        selected={selected}
                        //href={menu.path}
                        //    className={cn(style.navButton, menu.key)}
                    >
                        {selected ? menu.iconSelected : menu.icon}
                        {showTitle && <TextTitle>{menu.title}</TextTitle>}
                    </NavButton>
                )
            })}
        </nav>
    )
}
export default Navigation;