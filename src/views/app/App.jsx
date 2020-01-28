import React from "react";
import "./App.css";
import Header from "../common/header/Header";
import { Switch, Route, HashRouter } from "react-router-dom";
import StartPage from "../start/StartPage";
import ManagePage from "../manage/ManagePage";
import OverviewPage from "../overview/OverviewPage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <div className="page-container">
            <Switch>
              <Route path="/" exact component={StartPage} />
              <Route path="/manage" component={ManagePage} />
              <Route path="/overview" component={OverviewPage} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
