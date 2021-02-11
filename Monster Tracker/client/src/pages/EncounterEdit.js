import { useEffect, useContext, useState } from "react";
import React from "react";
import { UserContext } from "../providers/UserProvider";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MonsterCard from "../components/MonserCard";

export const EncounterEdit = (props) => {
    const { getToken } = useContext(UserContext);
    const history = useHistory();
    const [allMonsters, setAllMonsters] = useState([]);
    const [addedMonsters, setAddedMonsters] = useState([]);
    const [encounter, setEncounter] = useState({});
    const [monsterId, setMonsterId] = useState(0);
    const [favoriteMonsters, setFavoriteMonsters] = useState([]);
    const { encounterId } = useParams();
    const [previousAddedMonsters, setPreviousAddedMonsters] = useState([]);
    const [removedPreviousMonster, setRemovedPreviousMonster] = useState([]);
    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/monster`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((monsters) => {
                setAllMonsters(monsters);
            });
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        getToken().then((token) =>
            fetch(`/api/favorite/${user.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((favoriteMonster) => {
                setFavoriteMonsters(favoriteMonster);
            });
    }, []);

    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/encounter/${encounterId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((encounter) => { setEncounter(encounter) });
    }, []);

    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/encounterMonster/${encounterId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((encounterMonster) => {
                setPreviousAddedMonsters(encounterMonster);
            });
    }, [])

    const handleInputChange = (e) => {
        encounter[e.target.id] = e.target.value
        setEncounter(encounter);
    }

    const details = (id) => {
        const location = {
            pathname: `/MonsterDetails/${id}`,
            state: { prevpath: `/EncounterEdit` }
        }

        history.push(location)
    }

    const removeMonster = (monsterId) => {
        const copyArray = new Array();
        addedMonsters.forEach((currentMonsterObj) => {
            monsterId != currentMonsterObj.id ? (
                copyArray.push(currentMonsterObj)) : (<></>)
        })
        setAddedMonsters(copyArray);

    }

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const encounterObj = {
            Id:encounterId,
            userId: user.id,
            name: encounter.name,
            description: encounter.description
        };
        getToken().then((token) =>
            fetch(`api/encounter`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(encounterObj),
            })
                .then(() => {
                    addedMonsters.forEach((monsterObj) => {
                        const EMObject =
                        {
                            encounterId: encounterId,
                            monsterId: monsterObj.Monster.id
                        }
                        fetch("api/encounterMonster", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify(EMObject),
                        })
                    })
                }).then(() => {
                    console.log(removedPreviousMonster)
                    removedPreviousMonster.map((monster) => {
                        fetch(`api/encounterMonster/${monster}`, {
                            method: "DELETE",
                            headers: {
                                Authorization: `Bearer ${token}`
                            },
                        });
                    }
                    )
                })
        ).then(history.push("/"))
    }

    const removeFromEncounter = (monsterId) => {
        const copyArray = new Array();
        previousAddedMonsters.forEach((currentMonsterObj) => {
            monsterId != currentMonsterObj.monsterEncounterId ? (
                copyArray.push(currentMonsterObj)) : (<></>)
        })
        setPreviousAddedMonsters(copyArray);
        setRemovedPreviousMonster([...removedPreviousMonster, monsterId])

    }
    console.log(encounter)
    return (
        <section className="form-container">
            <div className="form-area">
                <form>
                    <fieldset>
                        <div className="div-style">
                            <div>Encounter Title</div>
                            <div>
                                <input className="newTitle" type="text" id="name" onChange={handleInputChange} defaultValue={encounter.name} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            Encounter Description
                        </div>
                        <div>
                            <textarea className="newBody" id="description" onChange={handleInputChange} defaultValue={encounter.description} />
                        </div>
                    </fieldset>
                    <hr className="hr-color" />
                    <div className="container scroll">
                        <div className="row">
                            {previousAddedMonsters.map((monsterObj) => (
                                <div className="col-3 monster-card">
                                    <MonsterCard Monster={monsterObj.monsterObject} />
                                    <p className="btn btn-danger" onClick={() => { removeFromEncounter(monsterObj.monsterEncounterId) }} >Remove</p>
                                </div>
                                ))}
                            {addedMonsters.map((monsterObj) => (
                                <div className="col-3 monster-card">
                                    <MonsterCard Monster={monsterObj.Monster} />
                                    <p className="btn btn-danger" onClick={() => { removeMonster(monsterObj.id) }} >Remove</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="hr-color" />
                    <div className="container scroll">
                        <div className="row">
                            <div className="col-12">Favorite Monsters</div>

                            {favoriteMonsters.map((monster) => (
                                <div className="col-3 monster-card">
                                    <MonsterCard Monster={monster.monsterObject} />
                                    <p className="btn btn-info" onClick={() => { details(monster.monsterObject.id) }}>Details</p>
                                    <p className="btn btn-success" onClick={() => {
                                        const monsterObj = { id: monsterId, Monster: monster.monsterObject };
                                        const newId = monsterId + 1;
                                        setMonsterId(newId);
                                        setAddedMonsters([...addedMonsters, monsterObj])
                                    }}>Add to Encounter</p>
                                </div>
                            ))}
                            <div className="col-12">All Monsters</div>
                            {allMonsters.map((monster) => (
                                <div className="col-3 monster-card">
                                    <MonsterCard Monster={monster} />
                                    <p className="btn btn-info" onClick={() => { details(monster.id) }}>Details</p>
                                    <p className="btn btn-success" onClick={() => {
                                        const monsterObj = { id: monsterId, Monster: monster };
                                        const newId = monsterId + 1;
                                        setMonsterId(newId);
                                        setAddedMonsters([...addedMonsters, monsterObj])
                                    }}>Add to Encounter</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <hr className="hr-color" />
                    <p className="btn btn-success" onClick={() => { encounter.name == undefined || encounter.description == undefined ? (toast.error("Name or description invalid")) : (addedMonsters.length == 0 && previousAddedMonsters.length==0 ? (toast.error("No Monster, please add one.")) : (handleSubmit())) }}>Submit</p>
                </form>
            </div>
        </section>
    )
}

export default EncounterEdit;