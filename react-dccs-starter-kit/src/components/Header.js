import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo_dccs_white.png";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink className="menu-item" exact to="/">
          <img src={logo} height="30px" className="logo" alt="" />
        </NavLink>
        <NavLink className="menu-item" exact to="/edit">
          <div className="menu-selector"></div>
          <div>Manage</div>
        </NavLink>
        <NavLink className="menu-item" exact to="/overview">
          <div className="menu-selector"></div>
          <div>Overview</div>
        </NavLink>
      </div>
    );
  }
}
