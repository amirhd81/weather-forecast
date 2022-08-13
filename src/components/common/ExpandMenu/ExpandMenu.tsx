import React, { FC, ReactNode, useState } from "react";
import { SVGs } from "../../../assets";

import classes from "./ExpandMenu.module.css";

interface MenuProps {
  menuTitle: string;
  expandedComponent: ReactNode;
}

export const ExpandMenu: FC<MenuProps> = (props) => {
  const { menuTitle, expandedComponent } = props;

  const [menuOpen, toggleMenuOpen] = useState<boolean>(false);

  return (
    <div className={classes.Container}>
      <div className={classes.Header} onClick={() => toggleMenuOpen(!menuOpen)}>
        <p className={classes.Title}>{menuTitle}</p>
        <img alt="close-icon" src={menuOpen ? SVGs.CheveronUp : SVGs.CheveronDown} />
      </div>
      {menuOpen && (
        <div className={classes.ContentRoot}>{expandedComponent}</div>
      )}
    </div>
  );
};
