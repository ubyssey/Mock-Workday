import {Link} from "react-router-dom";
import { setQuipts } from "./AnnoyingMascot";

export default function Registration() {
    return (
        <div className="content-container">
            <div>
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Registration Appointments Active and Upcoming</h1>
            </div>

            <div className="section-container">

                <div className="section-box appointment-page">
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

            </div>

            </div>
            <footer>
                <img src={'/itdoesntwork.svg'}></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and Ubyssey Humour Contributors. © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}