import React from "react";
import { useHistory } from "react-router-dom";
import "./Error404.css";
// constants
import { HOME_PATH } from "../../constants/routes";
import { ERROR404_GIF } from "../../constants/images";
// material-ui
import { Button } from "@material-ui/core";

const Error404 = () => {
    const history = useHistory();

    return (
        <div className="error404">
            <img src={ERROR404_GIF} alt="" />
            <div className="error404__container">
                <h1>404 - Page Not Found</h1>
                <p>What is a 404 Error?</p>
                <p>A 404 error is a standard HTTP error message code that means the website you were trying to reach couldn't be found on the server. It's a client-side error, meaning either the webpage was removed or moved and the URL wasn't changed accordingly, or the person just typed in the URL incorrectly.</p>
                <div className="error404__buttons">
                    <Button onClick={() => history.goBack()}>Back</Button>
                    <Button onClick={() => history.push(HOME_PATH)}>Home</Button>
                </div>
            </div>
        </div>
    );
};

export default Error404;
