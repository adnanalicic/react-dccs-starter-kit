import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./views/StartPage";
import ManagePage from "./views/ManagePage";
import OverviewPage from "./views/OverviewPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/edit" component={ManagePage} />
          <Route path="/overview" component={OverviewPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
