import React, { useState, createContext, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import MonsterCard from "../components/MonserCard";

export const Monsters=()=> {
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

    getAllMonsters();
    console.log(monsters)
    return (
        <div className="Container-fluid">
            <div className="row">
                <div className="col">text</div>
                {monsters.map((monster) => (
                    <div className="col-3">
                        <MonsterCard Monster={monster} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Monsters;