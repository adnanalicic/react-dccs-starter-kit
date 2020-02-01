import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../../assets/logo_dccs_white.png";
import Router from "../../app/Router";

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
        <NavLink className="menu-item" exact to={Router.EQUIPMENT_MANAGE}>
          Manage
        </NavLink>
        <NavLink className="menu-item" exact to={Router.EQUIPMENT}>
          Overview
        </NavLink>
      </div>
    );
  }
}
