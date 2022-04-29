import React from "react";
import "./DexBody.css";
// components
import DexList from "../dexList/DexList";
import DexStats from "../dexStats/DexStats";
import DexDetails from "../dexDetails/DexDetails";

const dexBody = ({ choice, setChoice }) => {
    return (
        <div className="dexBody">
            <DexList setChoice={setChoice} />
            <DexStats choice={choice} setChoice={setChoice} />
            <DexDetails choice={choice} />
        </div>
    );
};

export default dexBody;
