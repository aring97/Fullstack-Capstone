import { useEffect, useContext,useState } from "react";
import React from "react";
import { UserContext } from "../providers/UserProvider";
import { useParams } from "react-router-dom";

export const MonsterDetails = () => {
    const { getToken } = useContext(UserContext);
    const [monsterDetails, setMonsterDetails] = useState({});
    const { monsterId } = useParams();
    useEffect(() => {
        getToken().then((token) =>
            fetch(`/api/monster/${monsterId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }))
            .then((res) => res.json())
            .then((monsterDetails) => {
                setMonsterDetails(monsterDetails);
            });
    }, []);

    return (
        monsterDetails.monster != null ? (
            <div>
                <img src={monsterDetails.monster.image}/>
            </div>) : (<div>
            </div>)
    );

};

export default MonsterDetails;