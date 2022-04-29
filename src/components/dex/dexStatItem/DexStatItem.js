import React from "react";
import "./DexStatItem.css";
// constants
import * as COLORS from "../../../constants/colors";

const stats = {
    "HP": "The HP, short for Hit Point, determine how much damage a Pokémon can receive before fainting.",
    "Attack": "The Attack stat, or informally Physical Attack, partly determines how much damage a Pokémon deals when using a physical move.",
    "Defense": "The Defense stat, or informally Physical Defense, partly determines how much damage a Pokémon receives when it is hit with a physical move.",
    "Sp. Attack": "The Special Attack stat, or Sp. Atk, partly determines how much damage a Pokémon deals when using a special move.",
    "Sp. Defense": "The Special Defense stat, or Sp. Def, partly determines how much damage a Pokémon receives when it is hit with a special move.",
    "Speed": "The Speed stat determines the order of Pokémon that can act in battle. If Pokémon are moving with the same priority, Pokémon with higher Speed at the start of any turn will generally make a move before ones with lower Speed.",
    "Total": "The Total stat is the sum of all the base stats.",
};

const DexStatItem = ({ index, stat, value }) => {

    const handleStat = () => {
        alert(stats[stat]);
    };

    return (
        <div onClick={() => handleStat()} className="dexStatItem" style={{ backgroundColor: COLORS["STAT_" + (index + 1)] }} >
            <p>{stat}</p>
            <p>{value}</p>
        </div>
    );
};

export default DexStatItem;
