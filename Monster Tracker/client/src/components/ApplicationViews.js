﻿import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
    UserContext,
    UserProvider,
} from '../providers/UserProvider';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Monsters from "../pages/Monsters";
import MonsterDetails from "../pages/MonsterDetails";
import NewEncounter from "../pages/NewEncounter";
import EncounterDetails from "../pages/EncounterDetails";
import EncounterEdit from "../pages/EncounterEdit";

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
            <Route path="/MonsterDetails/:monsterId" render={(props) => (isLoggedIn ? (< MonsterDetails {...props} />) : (<Redirect to="/login" />) )} />
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/NewEncounter" exact>
                {isLoggedIn ? < NewEncounter /> : <Redirect to="/login" />}
            </Route>
            <Route path="/EncounterDetails/:encounterId" render={(props) => (isLoggedIn ? (<EncounterDetails {...props} />) : (<Redirect to="/login" />))} />
            <Route path="/EncounterEdit/:encounterId" render={(props) => (isLoggedIn ? (<EncounterEdit {...props} />) : (<Redirect to="/login" />))} />
        </switch>
            )

};

export default ApplicationViews;