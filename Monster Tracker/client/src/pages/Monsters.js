import React, { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import MonsterCard from "../components/MonserCard";
import "./Monster.css";

export const Monsters=()=> {
    const apiUrl = "/api/monster";
    const { getToken } = useContext(UserContext);
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        getToken().then((token)=>
        fetch(`${apiUrl}`, {
            method: "GET",
            headers: {
                Authorization:`Bearer ${token}`,
            },
        })).then((res) => res.json())
            .then((monsters) => {
                setMonsters(monsters);
            });
    }, []);
    console.log(monsters)
    return (
        <div className="Container-fluid">
            <div className="row">
                {monsters.map((monster) => (
                    <div className="col-3 bg-light div-background">
                        <MonsterCard Monster={monster} />
                        <button type="button" className="btn btn-info" value={monster.id}>Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Monsters;