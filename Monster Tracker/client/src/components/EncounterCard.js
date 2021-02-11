
import "./EncounterCard.css"
const EncounterCard = ({ Encounter }) => {
    return (
        <div className="encounter-div">
            <h4>{Encounter.name}</h4>
            <p>{Encounter.description }</p>
        </div>
    );
};

export default EncounterCard;