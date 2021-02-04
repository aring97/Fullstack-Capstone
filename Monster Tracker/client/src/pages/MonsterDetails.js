import { useEffect, useContext,useState } from "react";
import React from "react";
import { UserContext } from "../providers/UserProvider";
import { useParams } from "react-router-dom";
import "./monsterDetails.css"

export const MonsterDetails = (props) => {
    const { getToken } = useContext(UserContext);
    const [monsterDetails, setMonsterDetails] = useState({});
    const { monsterId } = useParams();
    const monster = monsterDetails.monster;
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

    console.log(props.location.state.prevpath)
    console.log(monsterDetails)

    const getMoveString = () => {

        let moveString = `Speed: ${monster.walk}ft.`
        if (monster.fly != null) {
            moveString += ` Fly: ${monster.fly}ft.`
        }
        if (monster.swim != null) {
            moveString += ` Swim: ${monster.swim}ft.`
        }
        if (monster.burrow != null) {
            moveString += ` Burrow: ${monster.burrow}`
        }
        return moveString
    }
    const getProf = () => {
        let profString = ``
        monsterDetails.proficiency.forEach(prof => profString += prof.profName + ": +" + prof.value+" ")
        return profString
    }
    const getSense = () => {
        let senseString = "Senses: ";
        monsterDetails.senses.forEach(sense => {
            if (sense.senseName == "Passive Perception") {
                senseString += sense.senseName +" "+ sense.value+" ";
            } else { senseString += sense.senseName +" "+ sense.value + "ft. " }
        })
        return senseString;
    }
    const getAbilities = () => {
        let stringArray = new Array()
        monsterDetails.abilities.forEach(ability => {
            if (ability.type == "Ability") {
                stringArray.push(ability.name + `: ` + ability.description);
            }
        })
        return stringArray;
    }
    return (
        monsterDetails.monster != null ? (
            <div className="container-fluid div-bg">
                <div className="row">
                    <div className="col-xl-6 col-md-10 offset-md-1">
                        <img className="image" src={monster.image} />
                    </div>
                    <div className="col-xl-4 col-md-10 offset-md-1">
                        <h1>{monster.name}</h1>
                        {monster.subType != null ? (<p >{monster.size} {monster.type} ({monster.subType}), {monster.alignment}</p>) : (<p>{monster.size} {monster.type}, {monster.alignment}</p>)}
                        <hr className="hr-color" />
                        <p> Armor Class: {monster.ac}( {monster.armorList})</p>
                        <p> Hit points: {monster.hp} ({monster.hitDice})</p>
                        { getMoveString()}
           
                        <hr className="hr-color" />
                        <p>STR: {monster.str}({Math.floor((monster.str - 10) / 2)}) DEX: {monster.dex}({Math.floor((monster.dex - 10) / 2)}) CON: {monster.con}({Math.floor((monster.con - 10) / 2)}) INT: {monster.int}({Math.floor((monster.int - 10) / 2)}) WIS: {monster.wis}({Math.floor((monster.wis - 10) / 2)}) CHA: {monster.cha}({Math.floor((monster.cha - 10) / 2)})</p>
                        <hr className="hr-color" />
                        {getProf()}
                        {monster.vulnerabilities != null ? (<p>Damage Vulnerabilities: {monster.vulnerabilities}</p>) : (<p></p>)}
                        {monster.resistances != null ? (<p>Damage Resistances: {monster.resistances}</p>) : (<p></p>)}
                        {monster.damageImmunities != null ? (<p>Damage Immunities: {monster.damageImmunities}</p>) : (<p></p>)}
                        {monster.conditionImmunities != null ? (<p>Condition Immunities: {monster.conditionImmunities}</p>) : (<p></p>)}
                        {getSense()}
                        <p>Languages: {monster.languages}</p>
                        <p>Challenge: {monster.cr} ({ monster.xp}XP)</p>
                        <hr className="hr-color" />
                        {console.log(getAbilities())}
                        <div>{getAbilities().forEach(ability => { return (<p>{ability}</p>) })}</div>
                    </div>
                </div>
            </div>
                ) : (<div>
            </div>)
    );

};

export default MonsterDetails;