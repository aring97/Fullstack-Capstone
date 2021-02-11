import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import MonsterCard from "../components/MonserCard";
import "./Monster.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const Monsters = () => {
    const history = useHistory();
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

    const details=(id)=> {
        const location = {
            pathname: `/MonsterDetails/${id}`,
            state: { prevpath:`/Monsters`}
        }

        history.push(location)
    }

    const favorite = (id) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const favorite = {
            userId: user.id,
            monsterId:id
        }
        getToken().then((token) =>
            fetch("/api/favorite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`,
                },
                body: JSON.stringify(favorite),
            })
        )
        toast.success("Monster added to favorite")

    }
    return (
        <div className="Container-fluid">
            <div className="row">
                {monsters.map((monster) => (
                    <div className="col-3 div-background">
                        <MonsterCard Monster={monster} />
                        <button type="button" className="btn btn-info" onClick={() => { details(monster.id) }}>Details</button>
                        <button type="button" className="btn btn-success" onClick={() => { favorite(monster.id) }}>Add to Favorite</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Monsters;