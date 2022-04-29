import React from "react";
import "./DexStats.css";
// components
import DexStatsTitle from "../dexStatsTitle/DexStatsTitle";
import DexStatItem from "../dexStatItem/DexStatItem";
// material-ui
import { IconButton } from "@material-ui/core";
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';

const DexStats = ({ choice, setChoice }) => {
    const getSpriteId = (id) => {
        if (id < 10)
            return "00" + id;
        else if (id < 100)
            return "0" + id;
        else
            return "" + id;
    };

    const getTotalStats = (stats) => {
        let sum = 0;
        Object.keys(stats).map(stat => sum += stats[stat]);
        return sum;
    };

    return (
        <div className="dexStats">
            <DexStatsTitle choice={choice} setChoice={setChoice} />
            <div className="dexStats__displaySprites">
                <img src={`/images/sprites/${getSpriteId(choice.id)}${choice.shiny ? "s" : ""}.gif`} alt="" onClick={() => setChoice(choice => ({ ...choice, shiny: !choice.shiny }))} />
                <IconButton onClick={() => setChoice(choice => ({ ...choice, shiny: !choice.shiny }))} style={{ backgroundColor: choice.shiny ? "darkgreen" : "darkblue" }} > <FlareRoundedIcon /></IconButton>
            </div>
            <div className="dexStats__pkmnStats">
                {Object.keys(choice.base).map((stat, index) => <DexStatItem key={index} index={index} stat={stat} value={choice.base[stat]} />)}
                <DexStatItem key={6} index={6} stat={"Total"} value={getTotalStats(choice.base)} />
            </div>
        </div>
    );
};

export default DexStats;
