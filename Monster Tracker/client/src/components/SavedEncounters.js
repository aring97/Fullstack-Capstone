import { UserContext } from "../providers/UserProvider";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import EncounterCard from "./EncounterCard";
import "./favorite.css";

export const SavedEncounters = () => {
    const { getToken } = useContext(UserContext);
    const [savedEncounters, setSavedEncounter] = useState([]);
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getSavedEncounters()
    }, []);

    const getSavedEncounters = () => {
        getToken().then((token) =>
            fetch(`/api/encounter/getByuser/${user.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            })).then((res) => res.json())
            .then((encounters) => { setSavedEncounter(encounters); });
    }

    const deleteEncounter = (id) => {
        getToken().then((token) =>
            fetch(`/api/encounter/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then(getSavedEncounters())
    }

    const details = (id) => {
        const location = {
            pathname: `/EncounterDetails/${id}`,
            state: { prevpath: `/SavedEncounters` }
        }

        history.push(location)
    }

    return (
        <div>
            {savedEncounters.map((encounter) => {
                return (
                    <div className="div-background">
                        <EncounterCard Encounter={encounter} />
                        <button type="button" className="btn btn-info" onClick={() => { details(encounter.id) }}>Details</button>
                        <button type="button" className="btn btn-success" onClick={() => { history.push(`/EncounterEdit/${encounter.id}`) }}>Edit</button>
                        <button type="button" className="btn btn-danger" onClick={() => { deleteEncounter(encounter.id) }}>Delete</button>
                    </div>
                    )
            })}
        </div>
        )
}

export default SavedEncounters;