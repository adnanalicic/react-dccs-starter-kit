import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Header from "../common/header/Header";
import StartPage from "../start/StartPage";
import ManagePage from "../manage/ManagePage";
import OverviewPage from "../overview/OverviewPage";

import "./App.css";

// FIXME: Should we make some DesignDecisions regarding naming (Some suffixes would be nice...e.g. Component, Service, Store,...whatever) ?

/**
 * Application entry point.
 *
 */
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Header />
          <div className="pageContainer">
            <Switch>
              {/* FIXME: Should we think to collect all paths on single/multiple place/s (like we discussed) ? */}
              <Route path="/" exact component={StartPage} />
              {/* FIXME: route paths are bad.... Maybe we should think about them (e.g. manage->`/inventory/:id`, overview->`inventory`)*/}
              <Route path="/manage" component={ManagePage} />
              <Route path="/overview" component={OverviewPage} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
