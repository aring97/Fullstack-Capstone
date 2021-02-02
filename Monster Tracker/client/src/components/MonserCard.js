import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./MonsterCard.css";

const MonsterCard = ({ Monster }) => {
    return (
        <div>
            <img className="card-image" src={Monster.image} alt="Monster image" />
            <div>
                <h4>{Monster.name}</h4>
                <h6>{Monster.size} {Monster.type}, { Monster.alignment}</h6>
                <p> HP:{Monster.hp} AC:{Monster.ac} CR:{Monster.cr} </p>
                <p></p>
            </div>
        </div>
    );
};

export default MonsterCard;