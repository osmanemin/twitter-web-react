import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import NavButton from "./nav-button";
import TextTitle from "../text-title/text-title";

import style from "./navigation.module.css";
import { MENU } from "../../constants";

const Navigation = ({ flat = false, story }) => {
  const router = useRouter();

  return (
    <nav className={style.nav}>
      
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        let selected;

        story !== undefined ? selected = story : selected = router.pathname === menu.path; 

        return (
          <NavButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(style.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
};
export default Navigation;
