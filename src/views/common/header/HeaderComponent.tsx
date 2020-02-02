/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import { NavLink } from "react-router-dom";
import Router from "../../../common/Router";
import { Translation } from "../../../common/Translation";

import "./Header.css";
import logo from "../../../assets/logo_dccs_white.png";

/**
 * Holder component of all header related elements.
 */
export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink className="logo" exact to={Router.START}>
          <img src={logo} height="35px" className="logo" alt="" />
        </NavLink>
        <NavLink className="menu-item" exact to={Router.EQUIPMENT_MANAGE_NEW}>
          {Translation.HEADER_COMPONENT_MENU_MANAGE}
        </NavLink>
        <NavLink className="menu-item" exact to={Router.EQUIPMENT}>
          {Translation.HEADER_COMPONENT_MENU_OVERVIEW}
        </NavLink>
      </div>
    );
  }
}
