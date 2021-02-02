import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import firebase from "firebase/app";
import "firebase/auth";

export const UserContext = createContext();

export function UserProvider(props) {
    const apiUrl = "/api/user";
    const [users, setUser] = useState([]);
    const user = localStorage.getItem("user");
    const [isLoggedIn, setIsLoggedIn] = useState(user != null);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((u) => {
            setIsFirebaseReady(true);
        });
    }, []);

    const logIn = (email, pw) => {
        return firebase.auth().signInWithEmailAndPassword(email, pw)
            .then((signInResponse) => getUserProfile(signInResponse.user.uid))
            .then((user) => {
                console.log(user)
                    localStorage.setItem("user", JSON.stringify(user));
                    setIsLoggedIn(true);
                    return user;
            });
    };

    const logout = () => {
        return firebase.auth().signOut().then(() => {
            localStorage.clear();
            setIsLoggedIn(false);
        });
    };

    const register = (user, password) => {
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, password)
            .then((createResponse) =>
                saveUser({ ...user, firebaseId: createResponse.user.uid })
            ).then((savedUser) => {
                localStorage.setItem("user", JSON.stringify(savedUser));
                setIsLoggedIn(true);
                return savedUser;
            });
    };

    const getToken = () => firebase.auth().currentUser.getIdToken();

    const getUserProfile = (firebaseUserId) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${firebaseUserId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((resp) => resp.json())
        );
    };

    const saveUser = (user) => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }).then((resp) => resp.json())
        );
    };

    const getCurrentUser = () => {
        const user = localStorage.getItem("user");
        if (!user) {
            return null;
        }
        return JSON.parse(user);
    };

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                logIn,
                logout,
                register,
                getToken,
                getCurrentUser,
                users,
                setUser
            }}>
            {isFirebaseReady ? (props.children) : (<Spinner className="app-spinner dark" />
            )}
        </UserContext.Provider>
    );
}