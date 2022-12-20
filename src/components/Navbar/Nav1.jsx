import React from "react";
import { useEffect } from "react";

import { useState } from "react";
//import axios from 'axios';
import '../Navbar/Navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Contact from "../Contact/contact";
import Nav1 from "./Nav1";
import { useNavigate } from "react-router-dom";

const Navbar1 = () => {

    setTimeout(() => {
        //setTimer(60);
        window.location.reload(false);
    }, 60000);
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter == 0) { setCounter(60); window.location.reload(); }
            else { setCounter((prevCounter) => prevCounter - 1); }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const navigate = useNavigate();
    return <>
        {/* <Router><Routes>
            <Route exact path="/" element={
               } />

            <Route exact path="contact" element={<Contact />} />
        </Routes></Router> */}
        <div className="nav">
            <div className="navp1">
                <h3 className="sitename">HODLINFO</h3>
            </div>
            <div className="navp2">
                <button className="button1">INR</button>
                <button className="button2">BTC</button>
                <button className="button3" ><a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" className="button3alink" >Buy BTC</a></button>
            </div>
            <div className="navp3">
                <button className="button4">{counter}</button>
                <button className="button5" onClick={() => { navigate("/contact") }}>Connect to Telegram</button>
            </div>
        </div>

    </>

}

export default Navbar1;