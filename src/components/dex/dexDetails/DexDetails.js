import React from "react";
import "./DexDetails.css";
// components
import DexDetailsTitle from "../dexDetailsTitle/DexDetailsTitle";
import DexDetailsBody from "../dexDetailsBody/DexDetailsBody";

const DexDetails = ({ choice }) => {
    return (
        <div className="dexDetails">
            <DexDetailsTitle choice={choice} />
            <DexDetailsBody choice={choice} />
        </div>
    );
};

export default DexDetails;
