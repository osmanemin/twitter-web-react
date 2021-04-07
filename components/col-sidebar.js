import React from "react";
import style from './col-sidebar.module.css';
import cn from 'classnames';
import Navigation from "./navigation";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";

const ColSidebar = ({flat}) => {
    return (
        <div className={cn(style.sidebar)}>
            <Navigation flat={flat}/>
            <ThemeButton big full>Tweet</ThemeButton>
            <ProfileBox/>
        </div>

    )
}
export default ColSidebar;