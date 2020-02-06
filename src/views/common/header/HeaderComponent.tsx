/**
 Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 Implemented 2020 by DCCS Tuzla.

 @author: Adnan Alicic
 */

import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import Router from '../../../common/RouterPaths';
import { Translation } from '../../../common/Translation';

import * as css from './Header.scss';

// import * as logoIcon from "!raw-loader!../../../assets/logo_dccs_white.svg";

/**
 * Holder component of all header related elements.
 */
class HeaderComponent extends React.Component<RouteComponentProps> {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    // FIXME: logo icon...
    return (
      <div className={css.header}>
        <NavLink className={css.logo} exact={true} to={Router.START}>
          {/*<div className={css.logo} dangerouslySetInnerHTML={{ __html: logoIcon.default }} />*/}
        </NavLink>
        <NavLink
          className={pathname === Router.EQUIPMENT_MANAGE_NEW ? css.menuItem + ' ' + css.active : css.menuItem}
          exact={true}
          to={Router.EQUIPMENT_MANAGE_NEW}
        >
          {Translation.HEADER_COMPONENT_MENU_MANAGE}
        </NavLink>
        <NavLink
          className={pathname === Router.EQUIPMENT ? css.menuItem + ' ' + css.active : css.menuItem}
          exact={true}
          to={Router.EQUIPMENT}
        >
          {Translation.HEADER_COMPONENT_MENU_OVERVIEW}
        </NavLink>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
