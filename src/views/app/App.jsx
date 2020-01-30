import React from "react";
import "./App.css";
import Header from "../common/header/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import StartPage from "../start/StartPage";
import ManagePage from "../manage/ManagePage";
import OverviewPage from "../overview/OverviewPage";
import LoginPage from "../login/LoginPage";
import { AuthProvider } from "../auth/auth";
import PrivateRoute from "../auth/PrivateRoute";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <AuthProvider>
                    <BrowserRouter>
                        <Header />
                        <div className="page-container">
                            <Switch>
                                <PrivateRoute path="/" exact component={StartPage} />
                                <PrivateRoute path="/manage" component={ManagePage} />
                                <PrivateRoute path="/overview" component={OverviewPage} />
                                <Route path="/login" component={LoginPage}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </AuthProvider>
            </div>
        );
    }
}

export default App;
