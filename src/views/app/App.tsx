/** 
  Copyright (c) 2020 DCCS Tuzla. All rights reserved.
  Implemented 2020 by DCCS Tuzla.

  @author: Adnan Alicic
*/

import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import HeaderComponent from "../common/header/HeaderComponent";
import StartPage from "../start/StartPage";
import ManageEquipmentComponent from "../equipment/manage/ManageEquipmentComponent";
import EquipmentOverviewComponent from "../equipment/overview/EquipmentOverviewComponent";

import "./App.css";

/**
 * Application entry point.
 *
 */
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <HeaderComponent />
          <div className="pageContainer">
            <Switch>
              <Route path="/" exact component={StartPage} />
              <Route
                path="/equipment/:id"
                component={ManageEquipmentComponent}
              />
              <Route path="/equipment" component={EquipmentOverviewComponent} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
