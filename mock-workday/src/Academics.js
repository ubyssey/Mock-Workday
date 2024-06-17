import {Link, Outlet} from "react-router-dom";

export function Academics() {
    return (
        <div className="content-container">
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Academics</h1>
            </div>
            <div className="tabmenu">
                <ul>
                    <li>Academics</li>
                </ul>
            </div>
            <Outlet />

            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}

export function AcademicsIndex() {
    return (
        <div className="section-container">
            <div className="section-box progress">
                <h2>Academic Progress</h2>
            </div>
            <div className="section-box holds">
                <h2>My Holds</h2>
                <p>I have no idea what this is so I can't make jokes about it</p>
            </div>
            <div className="records">
                <ul>
                    <li className="section-box records-first">
                        <h2>My Holds</h2>
                        <p>I have no idea what this is so I can't make jokes about it</p>
                    </li>
                    <li className="section-box records-second">
                        <h2>My Holds</h2>
                        <p>I have no idea what this is so I can't make jokes about it</p>
                    </li>
                    <li className="section-box records-third">
                        <h2>My Holds</h2>
                        <p>I have no idea what this is so I can't make jokes about it</p>
                    </li>
                    <li className="section-box records-fourth">
                        <h2>My Holds</h2>
                        <p>I have no idea what this is so I can't make jokes about it</p>
                    </li>

                </ul>
            </div>
        </div>
    );
}