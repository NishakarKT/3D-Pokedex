import React, { useState } from "react";
import "./DexList.css";
// data
import pokedex from "../../../data/pokedex.json";
// components
import DexListItem from "../dexListItem/DexListItem";
// material-ui
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

// gen filter
const genRanges = { 0: 0, 1: 151, 2: 251, 3: 386, 4: 493, 5: 649 };

const DexList = ({ setChoice }) => {
    const [search, setSearch] = useState("");
    const [gen, setGen] = useState(1);

    const listFilter = () => {
        const gen = prompt("Enter Generation Number (1-5): ");
        if (gen >= 1 && gen <= 5)
            setGen(gen);
    };

    return (
        <div className="dexList">
            <div className="dexList__search">
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                <FilterListRoundedIcon onClick={() => listFilter()} />
            </div>
            <p>Generation {gen}</p>
            <div className="dexList__items">
                {pokedex.filter(pokemon => pokemon.name.english.toLowerCase().startsWith(search.toLowerCase())).map(pokemon => (pokemon.id > genRanges[gen - 1] && pokemon.id <= genRanges[gen]) ? <DexListItem key={pokemon.id} pokemon={pokemon} setChoice={setChoice} /> : null
                )}
            </div>
        </div>
    );
};

export default DexList;
