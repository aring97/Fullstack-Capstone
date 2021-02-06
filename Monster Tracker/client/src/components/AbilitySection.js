import React from "react";

const abilitySection = ({ ability, type }) => {

    return (
        type == null ? (<p>{ability}</p>) :
            (ability.type == type ? (<p>{ability.name}: {ability.description}</p>) : (<></>))
    );
};

export default abilitySection;