import { useEffect, useContext, useState } from "react";
import React from "react";
import { UserContext } from "../providers/UserProvider";
import { useHistory, useParams } from "react-router-dom";
import MonsterCard from "../components/MonserCard";

export const EncounterDetails = (props) => {
    const { getToken } = useContext(UserContext);
    const [encounterDetails, setEncounterDetails] = useState({});
    const [monsters, setMonsters] = useState([]);
    const { encounterId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/encounter/${encounterId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).then((res) => res.json())
            .then((encounter) => {
                setEncounterDetails(encounter);
            });
    }, []);

    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/encounterMonster/${encounterId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).then((res) => res.json())
            .then((monsters) => {
                setMonsters(monsters);
            });
    }, []);
    console.log(monsters)
    return (
        <div className="div-background">
            <h1>{encounterDetails.name}</h1>
            <p>{encounterDetails.description}</p>
            <div className="container">
                <div className="row">
                    {monsters.map((monster) => { return (<div className="card col-3"><MonsterCard Monster={monster.monsterObject} /></div>) })}
                </div>
            </div>
            <button type="button" className="btn btn-info" onClick={() => { history.goBack() }}>Back</button>
        </div>
        )
}

export default EncounterDetails;