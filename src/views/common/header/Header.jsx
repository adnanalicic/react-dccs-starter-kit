import React from "react";
import { NavLink } from "react-router-dom";
import Lookup from '../lookup/LookupModal';
import logo from "../../../assets/logo_dccs_white.png";
import logOutIcon from "../../../assets/logOutIcon.png";
import * as firebase from "firebase/app";
import 'firebase/auth';
import "./Header.css";

export default class Header extends React.Component {

    signOutHandler = () => {
        firebase.auth().signOut().catch(err => alert(err));
        localStorage.removeItem('authUser');
    };

    render() {
        return (
            <div className="header">
                <NavLink className="menu-item" exact to="/">
                    <img src={logo} height="30px" className="logo" alt="" />
                </NavLink>
                <NavLink className="menu-item" exact to="/manage">
                    <div className="menu-selector"/>
                    <div className="menu-text">Manage</div>
                </NavLink>
                <NavLink className="menu-item" exact to="/overview">
                    <div className="menu-selector"/>
                    <div className="menu-text">Overview</div>
                </NavLink>
                <Lookup onClickElement={<div className="headerImg" />} className="lookupWrapper">
                    <div onClick={this.signOutHandler}>
                        <img src={logOutIcon} alt="" className="logOutIcon"/>
                        <p>Log out</p>
                    </div>
                </Lookup>
            </div>
        );
    }
}
