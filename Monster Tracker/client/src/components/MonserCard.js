import React from "react";
import "./MonsterCard.css";

const MonsterCard = ({ Monster }) => {

    return (
        <div>
            <img className="card-image" src={Monster.image} alt="Monster image" />
            <div>
                <h4>{Monster.name}</h4>
                {Monster.subType !== null ? (<h6>{Monster.size} {Monster.type} ({Monster.subType}), {Monster.alignment}</h6>) : (<h6>{Monster.size} {Monster.type}, {Monster.alignment}</h6>)}
                <p> HP:{Monster.hp} AC:{Monster.ac} CR:{Monster.cr} </p>
                <p> STR:{Monster.str} DEX:{Monster.dex} CON:{Monster.con} INT:{Monster.int} WIS:{Monster.wis} CHA:{Monster.cha}</p>
            </div>

        </div>
    );
};

export default MonsterCard;