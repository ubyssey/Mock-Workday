import {Link, Outlet} from "react-router-dom";

export function Academics() {
    return (
        <div className="content-container">
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Academics</h1>
            </div>
            <div className="tabmenu">
                <ul>
                <li><Link to={"/academics/"}>Academics</Link></li>
                    <li><Link to={"/academics/registration"}>Registration</Link></li>
                </ul>
            </div>
            <Outlet />

            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made with hate by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}

export function AcademicsIndex() {
    return (
        <div className="section-container">
            <div className="section-box progress">
                <h2>Academic Progress</h2>
                <div class="progress-flex">
                    <div class="progress-circle">
                        <div class="progress-circle-filled"></div>
                        <div id="progress-inner" class="progress-circle-inner">4%</div>
                    </div>
                    <div>
                        <h3>B.Sc., Major in Who Really Cares??? (Vancouver)</h3>
                        <div class="satisfied">12 Satisfied</div>
                        <div class="out-of">of 300 Requirements</div>    
                    </div>
                </div>
                <div class="average"><b>Cumulative Average</b> <span>you are worthless.</span></div>
            </div>
            <div className="section-box holds">
                <h2>My Holds</h2>
                <table>
                    <tr>
                        <th>Hold Details</th>
                        <th>Description</th>
                        <th>Resolution Instructions</th>
                        <th>Hold Type</th>
                    </tr>
                    <tr>
                        <td colspan="4"><p>I have no idea what this is so I can't make jokes about it</p></td>
                    </tr>
                </table>
            </div>
            <div className="records links">
                <ul>
                    <li className="section-box records-first">
                        <h2>My Holds</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                    <li className="section-box records-second">
                        <h2>My Holds</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                    <li className="section-box records-third">
                        <h2>My Holds</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                    <li className="section-box records-fourth">
                        <h2>My Holds</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function RegistrationIndex() {
    return (
        <div className="section-container">
            <div className="section-box appointments">
                <h2>Registration Appointments Active and Upcoming</h2>
                <div>
                <table>
                    <tr>
                        <th></th>
                        <th>Appointment Status</th>
                        <th>Academic Period</th>
                        <th>Start Time</th>
                    </tr>
                    <tr>
                        <td>B. Sc., Major in Is This Really the Best Way to Start a Conversation?</td>
                        <td>Active</td>
                        <td>2024 - 2025 Winter Term 1 at the University of British Columbia Vancouver, Vancouver, BC, Canada V6T 1Z4</td>
                        <td>20240612T160340Z00:00:00</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Active</td>
                        <td>2024 - 2025 Winter Term 2 at the University of British Columbia Vancouver, Vancouver, BC, Canada V6T 1Z4</td>
                        <td>20240612T160340Z00:00:00</td>
                    </tr>
                </table>
                </div>
            </div>
            <div className="section-box schedule">
                <h2>Current Schedule</h2>
                <p>No Courses Registered</p>
            </div>
            <div className="reg-links links">
                <ul>
                    <li className="section-box">
                        <h2>Registration</h2>
                        <ul>
                            <li><a href="/">Find Course Sections???</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                    <li className="section-box">
                        <h2>Quicklinks</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>
                    <li className="section-box">
                        <h2>Quicklinks</h2>
                        <ul>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                            <li><a href="/">Video for going to sleep</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    );
}