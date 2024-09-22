import {Link} from "react-router-dom";
import { setQuipts } from "./AnnoyingMascot";

export default function RegisterSaved() {
    function startCaptcha() {
        
    }
    return (
        <div className="content-container">
            <div>
            <div className="pageheader">
                <h1>Start Registration from Saved Schedule</h1>
            </div>

            <div className="section-container">

                <div className="section-box appointment-page">
                    <h2>Saved Schedule</h2>
                    <div>
                    <table>
                        <tr>
                            <th>Courses</th>
                        </tr>
                        <tr>
                            <td>{localStorage.getItem("courses")}</td>
                        </tr>
                    </table>

                    <div className="captcha-check" onClick={() => startCaptcha()}>
                        <input type="checkbox" id="captcha" name="captcha" value=""></input>
                        <label for="captcha">Its time to end this hellish journey</label>
                    </div>

                    </div>
                </div>

            </div>

            </div>
            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}