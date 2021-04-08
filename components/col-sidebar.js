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
            <div className={style.tweet}>
                <ThemeButton big full={!flat}>{flat ? 'a' : "Tweet"}</ThemeButton>
            </div>
            <div className={style.profile}>
                <ProfileBox flat={flat}/>
            </div>
        </div>

    )
}
export default ColSidebar;