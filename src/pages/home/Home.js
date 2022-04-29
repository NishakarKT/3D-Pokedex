import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
// constants
import { DEX_PATH } from "../../constants/routes";
import { MAIN_BG_MP4 } from "../../constants/videos";
// material-ui
import { Button } from "@material-ui/core";

const Home = () => {
    const history = useHistory();

    return (
        <div className="home">
            <video className="home__bg" src={MAIN_BG_MP4} autoPlay muted loop />
            <div className="home__intro">
                <h1>Pokemon - Ultimate 3D Dex!</h1>
                <h2>A place where you can find and get to know every thing about any pokemon on your mind! So what are you waiting for ?! Click on "Open 3D Dex", choose a pokemon and get the data!</h2>
                <Button onClick={() => history.push(DEX_PATH)}>Open 3D Dex</Button>
            </div>
        </div>
    );
};

export default Home;
