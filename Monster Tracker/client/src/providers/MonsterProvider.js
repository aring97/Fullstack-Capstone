import React, { useState, createContext, useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const MonsterContext = createContext();

export function MonsterProvider(props){
    const apiUrl = "/api/monster";
    const { getToken } = useContext(UserContext);
    const [monsters, setMonsters] = useState([]);

    const getAllMonsters = () => {
        getToken().then((token) =>
            fetch(`${apiUrl}`, {
                Method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((Monsters) => {
                    setMonsters(Monsters);
                })
        );
    };

    return (
        <MonsterContext.Provider
            value={{
                getAllMonsters,
                monsters
            }}
        >
            {props.children}
        </MonsterContext.Provider>
    );
}