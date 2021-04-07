import React from 'react';
import NavButton from "./nav-button";
import TitleBold from "./title-bold";
import {Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More} from "./icons";

import style from './navigation.module.css';

const Navigation = ({selected}) => {
    return (
        <nav className={style.nav}>
            <NavButton>
                <Twitter/>
            </NavButton>

            <NavButton selected={selected === 'home'}>
                <Home/>
                <TitleBold>Home</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'explore'}>
                <Explore/>
                <TitleBold>Explore</TitleBold>
            </NavButton>

            <NavButton notify={"17"} selected={selected === 'notification'}>
                <Notification/>
                <TitleBold>Notification</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'messages'}>
                <Messages/>
                <TitleBold>Messages</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'bookmark'}>
                <Bookmark/>
                <TitleBold>Bookmark</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'lists'}>
                <Lists/>
                <TitleBold>Lists</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'profile'}>
                <Profile/>
                <TitleBold>Profile</TitleBold>
            </NavButton>

            <NavButton selected={selected === 'more'}>
                <More/>
                <TitleBold>More</TitleBold>
            </NavButton>
        </nav>
    )
}
export default Navigation;