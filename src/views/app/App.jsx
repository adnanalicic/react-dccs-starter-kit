import React from "react";
import "./App.css";
import Header from "../common/header/Header";
import {Switch, Route, HashRouter, Redirect} from "react-router-dom";
import StartPage from "../start/StartPage";
import ManagePage from "../manage/ManagePage";
import OverviewPage from "../overview/OverviewPage";
import LoginPage from "../login/LoginPage";
import { AuthProvider } from "../auth/auth";
import PrivateRoute from "../auth/PrivateRoute";
import * as firebase from "firebase/app";
import 'firebase/auth';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('authUser'))
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
        });
    }
    renderLogin = () => {
        return !this.state.user
            ? (<Route path="/login" component={LoginPage} />)
            : (<Redirect to="/"/>)
    };
    render() {
        return (
            <div className="App">
                <AuthProvider>
                    <HashRouter>
                        <Header />
                        <div className="page-container">
                            <Switch>
                                <PrivateRoute path="/" exact component={StartPage} />
                                <PrivateRoute path="/manage" component={ManagePage} />
                                <PrivateRoute path="/overview" component={OverviewPage} />
                                <Route path="/login" component={LoginPage} />
                            </Switch>
                        </div>
                    </HashRouter>
                </AuthProvider>
            </div>
        );
    }
};

export default App;
