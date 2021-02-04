import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import MonsterCard from "../components/MonserCard";
import "./Monster.css";
import { useHistory, useLocation } from "react-router-dom";
import MonsterDetails from "./MonsterDetails";

export const Monsters = () => {
    const history = useHistory();
    const apiUrl = "/api/monster";
    const { getToken } = useContext(UserContext);
    const [monsters, setMonsters] = useState([]);
    const location = useLocation();

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

    function details(id) {
        const location = {
            pathname: `/MonsterDetails/${id}`,
            state: { prevpath:`/Monsters`}
        }

        history.push(location)
    }
    return (
        <div className="Container-fluid">
            <div className="row">
                {monsters.map((monster) => (
                    <div className="col-3 bg-light div-background">
                        <MonsterCard Monster={monster} />
                        <button type="button" className="btn btn-info"  onClick={() => { details(monster.id) }}>Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Monsters;