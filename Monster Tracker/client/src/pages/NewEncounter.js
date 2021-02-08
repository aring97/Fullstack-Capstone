import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";
import MonsterCard from "../components/MonserCard";
import "./NewEncounter.css"
import { toast } from "react-toastify";


const NewEncounter = () => {
    
    const { getToken } = useContext(UserContext);
    const history = useHistory();
    const apiUrl = "/api/monster";
    const [allMonsters, setAllMonsters] = useState([]);
    const [addedMonsters, setAddedMonsters] = useState([]);
    const [encounter, setEncounter] = useState({});
    const [monsterId, setMonsterId] = useState(0);
    
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

    const handleInputChange = (e) => {
        encounter[e.target.id] = e.target.value
        setEncounter(encounter);
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
            monsterId!= currentMonsterObj.id ? (
                copyArray.push(currentMonsterObj)) : (<></>)
        })
        setAddedMonsters(copyArray)

    }

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const encounterObj = {
            userId: user.id,
            name :encounter.title,
            description : encounter.description
        };
        getToken().then((token) => 
            fetch("api/encounter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(encounterObj),
            }).then((res) => res.json())
                .then((resInt) => {
                    console.log(addedMonsters)
                    addedMonsters.forEach((monsterObj) => {
                        const EMObject =
                        {
                            encounterId: resInt,
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
                }) 
        )
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
                                    const newId = monsterId + 1;
                                    setMonsterId(newId);
                                    setAddedMonsters([...addedMonsters, monsterObj])
                                }}>Add to Encounter</p>
                            </div>
                        ))}
                        </div>

                    </div>
                    <hr className="hr-color" />
                    <p className="btn btn-success" onClick={() => { encounter.title == undefined || encounter.description == undefined ? (toast.error("Name or description invalid")) : (addedMonsters.length==0?(toast.error("No Monster, please add one.")):(handleSubmit())) }}>Submit</p>
                </form>
            </div>
        </section>
    )
};

export default NewEncounter;