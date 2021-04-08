import React from "react";
import style from './layout.module.css';
import cn from 'classnames';
import Sidebar from "../col/col-sidebar";
import CONST from "../../constants";
import Main from "../col/col-main";
import Extra from "../col/col-extra";
import useWindowSize from "../../hooks/useWindowSize";

const Layout = ({children}) => {
    const size = useWindowSize();

    return (
        <div className={cn(style.layout)}>
            <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
            <Main>{children}</Main>
            {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
        </div>

    )
}
export default Layout;