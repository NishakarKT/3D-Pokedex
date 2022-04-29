import React, { useState, useEffect } from "react";
import "./DexDetailsBody.css";
// constants
import * as COLORS from "../../../constants/colors";

const DexDetailsBody = ({ choice }) => {
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
        <div className="dexDetailsBody" style={style}>
            <div>
                <b>Id</b>
                <p>{choice.id}</p>
            </div>
            <hr />
            <div>
                <b>Species</b>
                <p>{choice.species}</p>
            </div>
            <hr />
            <div>
                <b>Description</b>
                <p>{choice.description}</p>
            </div>
            <hr />
            <div>
                <b>Physical Chracteristics</b>
                <p>Height: {choice.profile.height}</p>
                <p>Weight: {choice.profile.weight}</p>
            </div>
            <hr />
            <div>
                <b>Gender Ratio</b>
                <p>Male: {choice.profile.gender.split(":")[0]} %</p>
                <p>Female: {choice.profile.gender.split(":")[1]} %</p>
            </div>
        </div>
    );
};

export default DexDetailsBody;
