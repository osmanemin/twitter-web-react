import React from 'react';
import NavButton from "./nav-button";
import TextTitle from "./text-title";
import {Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More} from "./icons";

import style from './navigation.module.css';

const Navigation = ({flat = false, selected}) => {
    return (
        <nav className={style.nav}>
            <NavButton>
                <Twitter/>
            </NavButton>

            <NavButton selected={selected === 'home'}>
                <Home/>
                <TextTitle>Home</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'explore'}>
                <Explore/>
                <TextTitle>Explore</TextTitle>
            </NavButton>

            <NavButton notify={"17"} selected={selected === 'notification'}>
                <Notification/>
                <TextTitle>Notification</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'messages'}>
                <Messages/>
                <TextTitle>Messages</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'bookmark'}>
                <Bookmark/>
                <TextTitle>Bookmark</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'lists'}>
                <Lists/>
                <TextTitle>Lists</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'profile'}>
                <Profile/>
                <TextTitle>Profile</TextTitle>
            </NavButton>

            <NavButton selected={selected === 'more'}>
                <More/>
                <TextTitle>More</TextTitle>
            </NavButton>
        </nav>
    )
}
export default Navigation;