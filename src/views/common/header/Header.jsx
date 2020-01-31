import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../../assets/logo_dccs_white.png";

// FIXME: Should we use Component if we're not using any method from lifecycle ?
/**
 * Holder component of all header related elements.
 */
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink className="menuItem" exact to="/">
          <img src={logo} height="30px" className="logo" alt="" />
        </NavLink>
        {/* FIXME: How do we know which item is active ? Anyway it would be nice if We have following configuration of menu:
        <div className="header">
          <MenuItem content='Manage' to= '/manage' />
          <MenuItem content='Overview' to= '/overview' />
          ...in the future...maybe submenus appear...
          <MenuItem>
            <MenuItem content='Example1' to= '/example1' />
            <MenuItem content='Example2' to= '/example2' />
            <MenuItem content='Example3' to= '/example3' />
          </MenuItem
        </div>

        */}
        <NavLink className="menuItem" exact to="/manage">
          <div className="menuSelector"></div>
          <div className="menuText">Manage</div>
        </NavLink>
        <NavLink className="menuItem" exact to="/overview">
          <div className="menuSelector"></div>
          <div className="menuText">Overview</div>
        </NavLink>
      </div>
    );
  }
}
