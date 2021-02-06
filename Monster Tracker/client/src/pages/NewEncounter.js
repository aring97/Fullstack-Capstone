import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";
import MonsterCard from "../components/MonserCard";
import "./NewEncounter.css"

const NewEncounter = () => {
    
    const { getToken } = useContext(UserContext);
    const history = useHistory();
    const apiUrl = "/api/monster";
    const [allMonsters, setAllMonsters] = useState([]);
    const [addedMonsters, setAddedMonsters] = useState([]);
    let monsterId = 0;
    
    useEffect(() => {
        getToken().then((token) =>
            fetch(`${apiUrl}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((monsters) => {
                setAllMonsters(monsters);
            });
    }, []);


    const Encounter = { };

    const handleInputChange = (e) => {
        Encounter[e.target.id] = e.target.value
    }

    const details=(id) =>{
        const location = {
            pathname: `/MonsterDetails/${id}`,
            state: { prevpath: `/NewEncounter` }
        }

        history.push(location)
    }

    const removeMonster = (monsterId) => {
        const copyArray = new Array();
        addedMonsters.forEach((currentMonsterObj) => {
            console.log(currentMonsterObj.id)
            monsterId!= currentMonsterObj.id ? (
                copyArray.push(currentMonsterObj)) : (<></>)
        })
        console.log(copyArray)
        setAddedMonsters(copyArray)

    }

   
    return (
        <section className="form-container">
            <div className="form-area">
                <form>
                    <fieldset>
                        <div className="div-style">
                            <div>Encounter Title</div>
                            <div>
                                <input className="newTitle" type="text" id="title" onChange={handleInputChange} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            Encounter Description
                        </div>
                        <div>
                            <textarea className="newBody"id="description" onChange={handleInputChange} />
                        </div>
                    </fieldset>
                    <hr className="hr-color" />
                    <div className="container scroll">
                        <div className="row">
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
                        {allMonsters.map((monster) => (
                            <div className="col-3 monster-card">
                                <MonsterCard Monster={monster} />
                                <p className="btn btn-info" onClick={() => { details(monster.id) }}>Details</p>
                                <p className="btn btn-success" onClick={() => {
                                    const monsterObj = { id: monsterId, Monster: monster };
                                    monsterId++;
                                    console.log(monsterId)
                                    setAddedMonsters([...addedMonsters, monsterObj])
                                }}>Add to Encounter</p>
                            </div>
                        ))}
                            </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default NewEncounter;