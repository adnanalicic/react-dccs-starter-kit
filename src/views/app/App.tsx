/**
 Copyright (c) 2020 DCCS Tuzla. All rights reserved.
 Implemented 2020 by DCCS Tuzla.

 @author: Adnan Alicic
 */

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Router from '../../common/RouterPaths';
import HeaderComponent from '../common/header/HeaderComponent';
import EquipmentFormComponent from '../equipment/manage/EquipmentFormComponent';
import ManageEquipmentComponent from '../equipment/manage/ManageEquipmentComponent';
import EquipmentOverviewComponent from '../equipment/overview/EquipmentOverviewComponent';
import StartPage from '../start/StartPage';

import * as css from './App.scss';

/**
 * Application entry point.
 *
 */
export default class App extends React.Component {
  render() {
    return (
      <div className={css.app}>
        <HashRouter>
          <HeaderComponent />
          <div className={css.pageContainer}>
            <Switch>
              <Route path={Router.START} exact={true} component={StartPage} />
              <Route path={Router.EQUIPMENT_MANAGE_NEW} component={EquipmentFormComponent} />
              <Route path={Router.EQUIPMENT_MANAGE_EDIT} component={ManageEquipmentComponent} />
              <Route path={Router.EQUIPMENT} component={EquipmentOverviewComponent} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
