import React, { useState, useEffect } from "react";
import "./DexDetailsTitle.css";
// constants
import * as COLORS from "../../../constants/colors";

const DexDetailsTitle = ({ choice }) => {
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
        <div className="dexDetailsTitle" style={style}>
            <p>English: {choice.name.english}</p>
            <p>Japanese: {choice.name.japanese}</p>
            <p>Chinese: {choice.name.chinese}</p>
            <p>French: {choice.name.french}</p>
        </div>
    );
};

export default DexDetailsTitle;
