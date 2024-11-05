import {Link} from "react-router-dom";
import { setQuipts } from "./AnnoyingMascot";

export default function Finances() {

    return (
        <div className="content-container">
            <div>
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Finances</h1>
            </div>

            <div className="section-container finances">

                <div className="section-box">
                    <h2><a href="https://ubyssey.ca/tag/workday-student/" target="_blank">idk, read some <i>ubyssey</i> about it</a></h2>
                </div>

                <div className="section-box">
                    <h2><a href="https://ubyssey.ca/news/ubc-charged-some-students-late-fees-after-saying-it-wouldnt/" target="_blank">
                        <b>Oct. 16, 2024</b> UBC charged some students late fees after saying it wouldn't</a></h2>
                </div>


                <div className="section-box">
                    <h2><a href="https://ubyssey.ca/news/incorrect-tuition-fees-applied-to-some-workday-student-accounts/" target="_blank">
                        <b>Aug. 30, 2024</b> Balance error: Incorrect tuition fees applied to some Workday Student accounts</a></h2>
                </div>

                <div className="section-box">
                    <h2><a href="https://ubyssey.ca/news/issues-with-ubc-payroll-operations-frustrate-student-employees/" target="_blank">
                        <b>Oct. 2, 2023</b> Issues with UBC payroll operations frustrate student employees 
                    </a></h2>
                </div>

                <div className="section-box">
                    <h2><a href="https://ubyssey.ca/news/new-payroll-system-hiccups/" target="_blank">
                        <b>Feb. 5, 2021</b> New UBC payroll system brings small hiccups but quick fixes, TA union says
                    </a></h2>
                </div>

            </div>

            </div>
            <footer>
                <img src={'/itdoesntwork.svg'}></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}