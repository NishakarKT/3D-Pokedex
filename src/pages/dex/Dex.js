import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./Dex.css";
// constants
import { DEX_BG_JPG } from "../../constants/images";
// components
import DexHead from "../../components/dex/dexHead/DexHead";
import DexBody from "../../components/dex/dexBody/DexBody";

// default choice
const defChoice = {
    id: 1, shiny: false, name: { english: "Bulbasaur", japanese: "\u30d5\u30b7\u30ae\u30c0\u30cd", chinese: "\u5999\u86d9\u79cd\u5b50", french: "Bulbizarre" }, type: ["Grass", "Poison"], base: { "HP": 45, "Attack": 49, "Defense": 49, "Sp. Attack": 65, "Sp. Defense": 65, "Speed": 45 }, species: "Seed Pok\u00e9mon", description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\u2019s rays, the seed grows progressively larger.", evolution: { next: [["2", "Level 16"]] }, profile: { height: "0.7 m", weight: "6.9 kg", egg: ["Monster", "Grass"], ability: [["Overgrow", "false"], ["Chlorophyll", "true"]], gender: "87.5:12.5" }, egg: ["Monster", "Grass"], ability: [["Overgrow", "false"], ["Chlorophyll", "true"]], gender: "87.5:12.5", image: {}, sprite: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png", thumbnail: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png", hires: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
};

const Dex = () => {
    const [myChoice, setMyChoice] = useState(defChoice);

    return (
        <div className="dex">
            <img className="dex__bg" src={DEX_BG_JPG} alt="" />
            <div className="dex__container">
                <DexHead />
                <DexBody choice={myChoice} setChoice={setMyChoice} />
            </div>
        </div>
    );
};

export default Dex;
