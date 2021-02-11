import { UserContext } from "../providers/UserProvider";
import { useEffect, useState, useContext } from "react";
import MonsterCard from "./MonserCard";
import "./favorite.css";
import { useHistory } from "react-router-dom";

export const FavoriteMonsters = () => {
    const { getToken } = useContext(UserContext);
    const [favoriteMonsters, setFavoriteMonster] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    useEffect(() => {
        getFavorites()
    }, []);

    const getFavorites = () => {
        getToken().then((token) =>
            fetch(`/api/favorite/${user.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })).then((res) => res.json())
            .then((monsters) => { setFavoriteMonster(monsters); });
    }

    const details = (id) => {
        const location = {
            pathname: `/MonsterDetails/${id}`,
            state: { prevpath: `/Monsters` }
        }

        history.push(location)
    }

    const deleteFavorite = (id) => {
        getToken().then((token) =>
            fetch(`/api/favorite/${id}`, {
                method: "DELETE",
                headers:{
                Authorization:`Bearer ${token}`,
                },
            })).then(getFavorites())

    }
    console.log(favoriteMonsters)
    return (
        <div className="container">
            <div className="row">
                {favoriteMonsters.map((monster) => {
                return (
                    <div className="col-xl-2 col-md-10 div-background ">
                        <MonsterCard Monster={monster.monsterObject} />
                        <button type="button" className="btn btn-info" onClick={() => { details(monster.monsterObject.id) }}>Details</button>
                        <button type="button" className="btn btn-danger" onClick={() => { deleteFavorite(monster.favoriteId) }}>Delete</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default FavoriteMonsters;