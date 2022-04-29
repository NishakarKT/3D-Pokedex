import React, { useState, useEffect } from "react";
import "./DexStatsTitle.css";
// constants
import * as TYPES from "../../../constants/types";
import * as COLORS from "../../../constants/colors";

const DexStatsTitle = ({ choice, setChoice }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const types = choice.type;
        setStyle(() => {
            if (types.length === 1)
                return { backgroundColor: COLORS[types[0].toUpperCase()] };
            return { background: `linear-gradient(to right, ${COLORS[types[0].toUpperCase()]}, ${COLORS[types[1].toUpperCase()]})` };
        });
    }, [choice]);

    return (
        <div className="dexStatsTitle" style={style} onClick={() => setChoice(choice => ({ ...choice, shiny: !choice.shiny }))}>
            <p>{choice.name.english} {choice.shiny ? "(Shiny)" : ""} </p>
            <div className="dexStatsTitle__types">
                {choice.type.map((type, index) => <img key={index} src={TYPES[type.toUpperCase()]} alt="" />)}
            </div>
        </div>
    );
};

export default DexStatsTitle;
