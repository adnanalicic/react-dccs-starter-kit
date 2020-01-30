import React, {useCallback, useContext} from "react";
import { Redirect, withRouter } from 'react-router';
import "./css/login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../auth/auth";

const LoginPage = ({history}) => {
    const submitHandler = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then((result) => localStorage.setItem('authUser', JSON.stringify(result.user)));
            history.push('/');
        }
        catch (e) {
            alert(e);
        }

    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            <div className="login-header"/>
            <div className="wrapper">
                <p>Log in with your email and password</p>
                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </>
    )
};

export default withRouter(LoginPage);
