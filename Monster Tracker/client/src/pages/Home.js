import FavoriteMonsters from "../components/FavoriteMonsters";
import SavedEncounters from "../components/SavedEncounters";
import "./Home.css";
const Home = () => {
    return (
        <div className="contianer-fluid">
            <div className="row">
                <div className="div-favorite col">
                    <h3>Favorite Monsters</h3>
                    <FavoriteMonsters  />
                </div>
                <div className="col-1"></div>
                <div className="div-saved col">
                    <h3>Saved Encounters</h3>
                    <SavedEncounters/>
                </div>
            </div>
        </div>
        );
}

export default Home;