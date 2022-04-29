import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DexHead.css";
// constants
import { LOGO_PNG } from "../../../constants/images";
import { HOME_PATH, BULBAPEDIA_LINK, CONTACT_FB_LINK } from "../../../constants/routes";

const DexHead = () => {
    const history = useHistory();
    const [myName, setMyName] = useState(JSON.parse(localStorage.getItem("Pokemon-Battle-Infinity"))?.myName || "My Name");

    const handleName = () => {
        let myName = prompt("What's Your Name ?");
        if (myName) {
            setMyName(myName);
            localStorage.setItem("Pokemon-Battle-Infinity", JSON.stringify({ myName }));
            alert("You name: " + myName + " has been successfully changed.");
        }
        else
            handleName()
    };

    return (
        <div className="dexHead">
            <div className="dexHead__left">
                <img onClick={() => history.push(HOME_PATH)} src={LOGO_PNG} alt="" />
                <h1>Pokemon - Ultimate 3D Dex!</h1>
            </div>
            <div className="dexHead__right">
                <p onClick={() => history.push(HOME_PATH)}>Home</p>
                <p onClick={() => handleName()}>{myName}</p>
                <p onClick={() => window.open(BULBAPEDIA_LINK, "_blank")}>Bulbapedia</p>
                <p onClick={() => window.open(CONTACT_FB_LINK, "_blank")}>Contact</p>
            </div>
        </div>
    );
};

export default DexHead;
