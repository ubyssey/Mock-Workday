import {Link} from "react-router-dom";
import {funnyQuip, setQuipts, setPriorityQuipts} from "./AnnoyingMascot";

export default function Home() {
    setPriorityQuipts([
        "Welcome to 'It Doesn't WorkDay'!",
        "I am $300,000,000 <b>(Three Hundred Million Dollars)</b>, the official mascot of 'It Doesn't Workday'!",
    ]);
    return (
        <div className="content-container">
            <div className="banner"></div>
            <div className="home">
                <div className="left">
                    <h1>Hi There</h1>
                    <div className="home-section">
                        <h2>Awaiting Your Action</h2>
                        <p>You're all caught up on your tasks.</p>
                    </div>
                    <div className="home-section">
                        <h2>Timely Suggestions</h2>
                        <p>Here's where you'll get updates on your active items.</p>
                    </div>
                </div>
                <div className="right">
                    <p className="date">Pretend it's Friday, June 14, 2024</p>
                    <div className="home-section">
                        <h2>Your Top Apps</h2>
                        <ul>
                            <li>
                                <Link to={"/vt0FtpYcOn1z9hxG7zw0fUcKYOul9nTQLqvxXgZvlqWgAQWs3E1nrgR2KPVgTCqzF86"}>
                                    <div className="app-icon"></div>
                                    <h3>Registration Appointments<br></br>Active and Upcoming</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/academics"}>
                                    <div className="app-icon"></div>
                                    <h3>Academics</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/finances"}>
                                    <div className="app-icon"></div>
                                    <h3>Finances</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/pay"}>
                                    <div className="app-icon"></div>
                                    <h3>Benefits and Pay</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made with hate by Sam Low and Ubyssey Humour Contributors © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}