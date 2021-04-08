import React from 'react';
import { withKnobs, boolean} from '@storybook/addon-knobs';

import Button from '../components/button';
import NavButton from "../components/nav-button";
import Navigation from "../components/navigation";
import {Home} from "../components/icons";
import TextTitle from "../components/text-title";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";

export default {
    title: 'Buttons',
    decorators: [withKnobs]
};


export const Normal = () => (
    <Button>
        Save
    </Button>
)

export const Theme = () => (
    <Stack column gap={40}>
        <ThemeButton>
            Save
        </ThemeButton>

        <ThemeButton full>
            Save Full
        </ThemeButton>

        <ThemeButton full big>
            Save Big Button
        </ThemeButton>
    </Stack>
)
export const NavigationButton = () => {
    return (
        <NavButton>
            <Home/>
            <TextTitle>Home</TextTitle>
        </NavButton>
    )
}
export const Nav = () => {
    const flat = boolean("Flat",false)
    return (
        <Navigation flat={flat} selected="home"/>
    )
}