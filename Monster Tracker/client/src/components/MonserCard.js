import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

const MonsterCard = ({ monster }) => {
    return (
        <div className="card">
            <img className="card-image-top" src={monster.Image} alt="Monster image" />
            <div className="card-body">
            </div>
        </div>
    );
};

export default MonsterCard;