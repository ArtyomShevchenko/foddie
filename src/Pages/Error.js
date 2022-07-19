import React from "react";
import { Link } from "react-router-dom";
import icon from "../media/icons/error.svg";

function Error() {
    return (
        <div className="error-container" style={ {
            backgroundColor: "black",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            color: "white",
            margin: " 0 auto",
            fontSize: "2rem"
            } }>
            <img src={icon} alt="" style={ {width: "50px"} }/>
            <div>
                <h2>404</h2>
                <h2>Page note found</h2>
                <br />
                <hr />
                <br />
                <li><Link to="/"  style={ {color: "red"} }>Home</Link></li>
            </div>
        </div>
    )
}
export default Error;