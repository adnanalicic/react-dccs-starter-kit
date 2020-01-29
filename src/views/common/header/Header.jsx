import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo_dccs_white.png";
import "./Header.css";

// FIXME: Should we use Component if we're not using any method from lifecycle ?
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
          {/* FIXME: Looks like we don't need empty div ? Another question is what should be clickable whole area or only text? */}
          <div className="menuSelector"></div>
          {/* FIXME: Should we think to collect translations at least into single file... */}
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
