import React from 'react';

import Button from '../components/button';
import NavButton from "../components/nav-button";
import Navigation from "../components/navigation";
import {Home} from "../components/icons";
import TitleBold from "../components/title-bold";

export default {
    title: 'Buttons'
};


export const Normal = () => (
    <Button>
        tıklama
    </Button>
)
export const NavigationButton = () => {
    return (
        <NavButton>
            <Home/>
            <TitleBold>Home</TitleBold>
        </NavButton>
    )
}
export const Nav = () => {
    return (
        <Navigation selected="home"/>
    )
}