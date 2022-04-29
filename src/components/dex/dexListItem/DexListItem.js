import React, { useState, useEffect } from "react";
import "./DexListItem.css";
// constants
import * as TYPES from "../../../constants/types";
import * as COLORS from "../../../constants/colors";

const DexListItem = ({ pokemon, setChoice }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const types = pokemon?.type;
        if (types)
            setStyle(() => {
                if (types.length === 1)
                    return { backgroundColor: COLORS[types[0].toUpperCase()] };
                return { background: `linear-gradient(to right, ${COLORS[types[0].toUpperCase()]}, ${COLORS[types[1].toUpperCase()]})` };
            });
    }, [pokemon]);

    return <div className="dexListItem" style={style} onClick={() => setChoice(pokemon)}>
        <p>{pokemon?.name.english}</p>
        <div className="dexListItem__types">
            {pokemon?.type.map((type, index) => <img key={index} src={TYPES[type.toUpperCase()]} alt="" />)}
        </div>
    </div>;
};

export default DexListItem;
