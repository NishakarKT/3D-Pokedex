import React, { useState, useEffect } from "react";
import "./Loader.css";
// constants
import { LOADER_GIF } from "../../constants/images";

// interval
let animatedText;

// sleep func
const sleep = (delay) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
};

const Loader = ({ text }) => {
    const [loaderText, setLoaderText] = useState("");

    useEffect(() => {
        clearInterval(animatedText);
        animatedText = setInterval(() => {
            setLoaderText(loaderText => {
                if (loaderText.length === text.length) {
                    sleep(500);
                    return "";
                }
                return loaderText + text[loaderText.length];
            })
        }, 100);
    }, [text]);

    return (
        <div className="loader">
            <div className="loader__container">
                <img src={LOADER_GIF} alt="" />
                <p>{loaderText}</p>
            </div>
        </div>
    );
};

export default Loader;
