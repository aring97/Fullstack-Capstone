import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const Home = () => {
    const { getToken } = useContext(UserContext);

    return (
        <div className="contianer-fluid">
            <div className="row">
                <div className="col">
                    <div>text</div>
                </div>
                <div className="col">
                    <div>text</div>
                </div>
            </div>
        </div>
        );
}

export default Home;