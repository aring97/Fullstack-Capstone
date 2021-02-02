import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
    UserContext,
    UserProvider,
} from '../providers/UserProvider';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Monsters from "../pages/Monsters";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserContext);
    const LoggedIn = () => {
        if (isLoggedIn) {
            return <Redirect to="/"/>
        } else {
            return <Redirect to="/login" />;
        }
    };
    return (
        <switch>
            <Route path="/" exact>
                {isLoggedIn ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/Monsters" exact>
                {isLoggedIn ? <Monsters /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
        </switch>
            )

};

export default ApplicationViews;