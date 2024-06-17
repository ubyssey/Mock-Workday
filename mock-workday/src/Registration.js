import {Link} from "react-router-dom";

export default function Registration() {
    return (
        <div class="content-container">
            <div>
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Registration Appointments Active and Upcoming</h1>
            </div>

            </div>
            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}