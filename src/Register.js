import {Link} from "react-router-dom";
import { setQuipts } from "./AnnoyingMascot";
import { useEffect, useState } from "react";

export default function RegisterSaved() {
    function startCaptcha() {
        document.getElementById("captcha").style.opacity = "0";
        document.getElementById("captcha").checked = true;
        document.getElementById("captcha-spinner").style.display = "block";
        setTimeout(() => {
            document.getElementById("captcha-spinner").style.display = "none";
            document.getElementById("captcha").style.opacity = "1";
            document.getElementById('silly-captcha').showModal();
        }, 1500);
    }
    return (
        <div className="content-container">
            <div>
            <div className="pageheader">
                <h1><Link to={"/academics/registration"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Start Registration from Saved Schedule</h1>
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

                    <button className="captcha-check" onClick={() => startCaptcha()}>
                        <input type="checkbox" disabled id="captcha" name="captcha" value=""></input>
                        <ion-icon id="captcha-spinner" class="spinner" name="reload-outline"></ion-icon>
                        <label for="captcha">Its time to end this hellish journey</label>
                    </button>
                    <CaptchaModal></CaptchaModal>

                    </div>
                </div>

            </div>

            </div>
            <footer>
                <img src={'/itdoesntwork.svg'} alt="It doesn't work day"></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}

function CaptchaModal() {
    const [prob, setProb] = useState(0);
    const [buttonState, setButtonState] = useState("SKIP");
    const [answerState, setAnswer] = useState([]);
    const [solutionState, setSolution] = useState([]);
    const problems = [
        {
            'type': 'select',
            'prompt': 'A better use of 300 million dollars',
            'boxes': [
                [
                    {'text': 'Live stage lighting and music mixing during AMS meetings', 'image': '/amsCouncil.jpg', 'choose': true},
                    {'text': 'Build a second Nest', 'image': '/nest.jpg', 'choose': true},
                    {'text': 'Funding for Pea Man\'s next stunt', 'image': '/peaman.jpg', 'choose': true},
                ],
                [
                    {'text': '2 months rent in Vancouver', 'image': '/vancouver.jpg', 'choose': true},
                    {'text': 'Give it to The Ubyssey 🙏', 'image': '/ubysseyOffice.jpg', 'choose': true},
                    {'text': 'Construct 1000 more \'The Shadow\'\'s', 'image': '/theshadow.webp', 'choose': true},
                ],
                [
                    {'text': '3 billion prints using PayForPrint', 'image': '/paper.jpg', 'choose': true},
                    {'text': 'Demolish frat village and replace with large McDonald\'s PlayPlace', 'image': '/fraternities.jpg','choose': true},
                    {'text': 'Just keep expanding Blue Chip', 'image': '/blueChip.jpg', 'choose': true},
                ],
            ],
            'credit': 'Ubyssey (Charlotte Alden, Isabella Falsetti, Jullian Forst, Iman Janmohomed, Elizabeth Wang, Viyan Handley), Wikimedia Commons (David G. Gordon, Sage Ross)'
        },

        {
            'type': 'select',
            'prompt': 'A good feature of Workday Student',
            'boxes': [
                [
                    {'image': '/lmao.jpg',},
                    {'image': '/wdcalendar.png',},
                    {'image': '/wdcourses.png',},
                ],
                [
                    {'image': '/wdfuture.png',},
                    {'image': '/wdmenu.png',},
                    {'image': '/wdnodata.png',},
                ],
                [
                    {'image': '/wdtime.png',},
                    {'image': '/wdwtf.png',},
                    {'image': '/wdzeros.png',},
                ],
            ],
        },
    ];

    let solution = [];
    useEffect(() => {
        solution = [];
        let answer = [];
        if (prob < problems.length) {
            if (problems[prob]['type'] === 'select') {
                console.log(problems[prob]);
                for (let r=0; r<problems[prob]['boxes'].length; r++) {
                    for (let c=0; c<problems[prob]['boxes'][r].length; c++) {
                        solution.push(problems[prob]['boxes'][r][c]['choose'] != null);
                        answer.push(false);
                    }
                }
            }
            setAnswer(answer);
            setSolution(solution);
        }
        console.log("reseted");
        console.log(solution);
        console.log(answer);
    }, [prob]);

    let captcha = <></>;
    if (prob < problems.length) {
        if (problems[prob]['type'] === 'select') {
            captcha = (
                <>            
                    <div className="captcha-header">
                        Select all squares with
                        <span>{problems[prob]['prompt']}</span>
                        If there are none, click skip
                    </div>
                    <table>
                        {problems[prob]['boxes'].map((row, ri) =>
                            <tr>
                                {row.map((cell, ci) =>
                                    <td className={answerState[(row.length * ri) + ci] ? 'selected' : ''}>
                                        <button onClick={(e) => {
                                            const answer = answerState.map((c, i) => {
                                                if (i === (row.length * ri) + ci) {
                                                    return c === false;
                                                } else {
                                                    return c;
                                                }
                                                });
                                            setAnswer(answer);
                                            console.log(answer);
                                            if (answer.includes(true)) {
                                                setButtonState("VERIFY");
                                            } else {
                                                setButtonState("SKIP");
                                            }
                                        }} 
                                        style={cell['image'] && {"background-image": "url('" + cell['image'] + "')"}}>
                                            <mark>{cell['text'] && cell['text']}</mark>
                                        </button>
                                    </td>
                                )}
                            </tr>
                        )}
                    </table>
                    <p className="credit">{problems[prob]["credit"]!= null && "Images: " + problems[prob]["credit"]}</p>
                </>
            );
        }
    } else {
        captcha = (<p>finished</p>);
        setTimeout(() => {
            document.getElementById('silly-captcha').close();
            window.location.replace("/hooray");
        }, 1000);
    }

    return (
        <dialog id="silly-captcha">
        <div class="captcha-box">

            {captcha}
            <div className="captcha-bottom">
                <p>{prob + 1} / {problems.length}</p>
                <button onClick={() => {
                    if(JSON.stringify(answerState) === JSON.stringify(solutionState)) {
                        document.getElementById('silly-captcha').classList.add('correct');
                        setTimeout(() => {
                            document.getElementById('silly-captcha').classList.remove('correct');
                            setProb(prob + 1);
                            setButtonState("SKIP");
                        }, 750);
                    } else {
                        document.getElementById('silly-captcha').classList.add('wrong');
                        setTimeout(() => document.getElementById('silly-captcha').classList.remove('wrong'), 750);
                    }
                }}><span className="state">{buttonState}</span>
                    <span className="wrong">WRONG</span>
                    <span className="correct">Correct!</span>    
                </button>
            </div>
        </div>
        </dialog>
    );
}