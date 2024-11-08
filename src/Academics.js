import {Link, Outlet} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { setQuipts, setPriorityQuipts } from "./AnnoyingMascot";

export function Academics() {
    return (
        <div className="content-container">
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> Academics</h1>
            </div>
            <div className="tabmenu">
                <ul>
                    <li id='academics-nav'><Link to={"/academics/"}>Academics</Link></li>
                    <li id='registration-nav'><Link to={"/academics/registration"}>Registration <span className="hideonbold pointer">👈</span></Link></li>
                </ul>
            </div>
            <Outlet />

            <footer>
                <img src={'/itdoesntwork.svg'} alt="It doesn't work day"></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}

export function AcademicsIndex() {
    setPriorityQuipts(["SHEEEEESH", "WOW! Not doing so good I see!"]);
    setQuipts(["Would be so embaressing if you opened this page in public HAHSAHAHAHAHAAHAHAH", "Planning on graduating, With THAT average?"]);
    useEffect(() => {
        document.getElementById("academics-nav").classList.add("bold");
        document.getElementById("registration-nav").classList.remove("bold");
    }, []);
    return (
        <div className="section-container">
            <div className="section-box progress">
                <h2>Academic Progress</h2>
                <div className="progress-flex">
                    <div className="progress-circle">
                        <div id="progress-inner" className="progress-circle-inner"><span>-0%</span></div>
                        <div className="progress-circle-filled"></div>
                    </div>
                    <div>
                        <h3>B.Sc., Major in Who Really Cares??? (Vancouver)</h3>
                        <div className="satisfied">-0.2 Satisfied</div>
                        <div className="out-of">of 300...000...000 Requirements</div>    
                    </div>
                </div>
                <div className="average"><b>Cumulative Average</b> <span>you are worthless.</span></div>
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
                        <td colSpan="4"><p>Hold... my hand?</p></td>
                    </tr>
                </table>
            </div>
            <div className="records links">
                <ul>
                    <li className="section-box records-third">
                        <h2>Humour</h2>
                        <ul>
                            <li><a target="_blank" href="https://ubyssey.ca/humour/ubcs-upgrade-to-workday-shockingly-sparks-negative-backlash/">UBC’s 'upgrade' to Workday shockingly sparks negative backlash</a></li>
                        </ul>
                    </li>

                    <li className="section-box records-first">
                        <h2>News</h2>
                        <ul>
                            <li><a target="_blank" href="https://ubyssey.ca/news/ubc-transitions-to-workday-student/">UBC transitions to Workday Student, students express frustration</a></li>
                            <li><a target="_blank" href="https://ubyssey.ca/news/revamp-of-ubcs-student-information-system-to-launch-late-summer-2023/">Revamp of UBC's student information system to launch late summer 2023</a></li>
                            <li><a target="_blank" href="https://ubyssey.ca/news/from-the-boardroom-june-24/">From the Boardroom: Governors sign provincial mandate letter, approve Workday Student funding</a></li>
                            <li><a target="_blank" href="https://ubyssey.ca/news/irp-partially-launches/">UBC’s long-anticipated $336-million software renewal partially launches</a></li>
                            <li><a target="_blank" href="https://ubyssey.ca/news/IRP-delayed-until-2023/">UBC’s $342 million software overhaul partially delayed until 2023  </a></li>
                            <li><a target="_blank" href="https://www.ubyssey.ca/news/ubc-invests-in-core-software-system-overhaul/">UBC investing over $60 million to overhaul core software systems by 2021 </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function openModal() {
    document.getElementById('stupid-fucking-modal').showModal();
}

var date_layers = {};
date_layers["root"] = {'parent':null,
    'children': [
        "Plank epoch",
        "Grand unification epoch",
        "Inflationary epoch",
        "Electroweak epoch",
        "Quark epoch",
        "Hadron epoch",
        "Neutrino decoupling",
        "Lepton epoch",
        "Big Bang nucleosynthesis",
        "Photon epoch",
        "Recombination",
        "Dark Ages",
        "Star and galaxy formation and evolution",
        "Reionization",
        "Present time 👈",
        "Radiation-dominated era",
        "Matter-dominated era",
        "Dark-energy-dominated era",
        "Stelliferous Era",
        "Heat death"
    ]
};


date_layers["Dark-energy-dominated era"] = {'parent': 'root',
    'children': [
        "Junior High",
        "High School",
        "Everything is my dark-energy dominated era",
    ]
};

date_layers["Everything is my dark-energy dominated era"] = {'parent': 'root',
    'children': [
        "Thats so true",
    ]
};

date_layers["High School"] = {'parent': 'root',
    'children': [
        "Thats so true",
    ]
};

date_layers["Junior High"] = {'parent': 'root',
    'children': [
        "Thats so true",
    ]
};

date_layers["Present time 👈"] = {'parent': 'root',
    'alt title': 'Present time',
    'children': [
        "Precambrian",
        "Paleozoic",
        "Mesozoic",
        "Cenozoic 👈",
    ]
};

date_layers["Precambrian"] = {'parent': 'Present time 👈',
    'children': [
        "Bro is precambrian?",
    ]
};

date_layers["Paleozoic"] = {'parent': 'Present time 👈',
    'children': [
        "Cambrian",
        "Ordovician",
        "Silurian",
        "Devonian",
        "Carboniferous: Mississipian",
        "Carboniferous: Pennyslvanian",
        "Permian",
    ]
};

date_layers["Mesozoic"] = {'parent': 'Present time 👈',
    'children': [
        "Triassic",
        "Jurassic",
        "Cretaceous",
    ]
};

date_layers["Cenozoic 👈"] = {'parent': 'Present time 👈',
    'alt title': 'Cenozoic',
    'children': [
        "Tertiary",
        "Quaternary 👈",
    ]
};

date_layers["Tertiary"] = {'parent': 'Cenozoic',
    'children': [
        "Paleocene",
        "Eocene",
        "Oligocene",
        "Miocene",
        "Pilocene",
    ]
};

date_layers["Quaternary 👈"] = {'parent': 'Cenozoic',
    'alt title': 'Quaternary',
    'children': [
        "Pleistocene",
        "Holocene 👈",
    ]
};

date_layers["Holocene 👈"] = {'parent': 'Present time 👈',
    'alt title': 'Holocene',
    'children': [
        "Before Christ",
        "After Christ 👈"
    ]
};

date_layers["Before Christ"] = {'parent': 'Holocene',
    'children': [
        "Paleolithic (pre c. 8800 BCE)",
        "Mesolithic (c. 8800 – 4900 BCE)",
        "Neolithic (c. 4900 – 2000 BCE)",
        "Bronze Age (c. 2000 – 800 BCE)",
        "Iron Age (c. late 11th century BCE – 1 BCE)",
        "Roman (c. 56 BCE – 1 CE)",
    ]
};

date_layers["Roman (c. 56 BCE – 1 CE)"] = {'parent': 'Before Christ',
    'children': [
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
        "Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue/ Eh, eheu, ehue",
    ]
};

date_layers["Roman (c. 0 BCE – 400 CE)"] = {'parent': 'After Christ',
    'children': [
        "Julio-Claudian dynasty (27 BC – AD 68)",
        "Year of the Four Emperors (68–69)",
        "Flavian dynasty (69–96)",
        "Nerva–Antonine dynasty (96–192)",
        "Year of the Five Emperors (193)",
        "Severan dynasty (193–235)",
        "Crisis of the Third Century (235–285)",
        "Tetrarchy (284–324)",
        "Constantinian dynasty (306–363)",
        "Valentinianic dynasty (364–392)",
    ]
};

date_layers["After Christ 👈"] = {'parent': 'Holocene',
    'alt title': 'After Christ',
    'children': [
        "Roman (c. 0 BCE – 400 CE)",
        "Early medieval period (c. 400 – 800 CE)",
        "Medieval period (800 – c. 1500)",
        "Post-medieval period (c. 1500 – c. 1800)",
        "Industrial/Modern 👈",
    ]
};

date_layers["Industrial/Modern 👈"] = {'parent': 'After Christ',
    'children': [
        "End of world war 2 (1945)",
        "First episode of scooby doo (1969)",
        "Collapse of the Soviet Union (1988-1991)",
        "Seinfeld 'The Contest' Airs (1992)",
        "Release of Fearless (2008)",
        "The Global Financial Crisis (2008)",
        "Release of Speak Now (2010)",
        "Release of Red (2012)",
        "Release of 1989 (2014)",
        "One Direction breaks up (2015)",
        "Release of Reputation (2017)",
        "Release of Lover (2019)",
        "Beginning of COVID-19 Pandemic (2019)",
        "Release of folklore (2020)",
        "Release of evermore (2020)",
        "Release of fearless (taylor's version) (2021)",
        "Release of red (taylor's version) (2021)",
        "Release of midnights (2022)",
        "Release of speak now (taylor's version) (2023)",
        "Release of 1989 (taylor's version) (2023)",
        "Release of The tortured poets society (2024) 👈",
    ]
};

date_layers['Release of The tortured poets society (2024) 👈']= {'parent': 'Industrial/Modern',
    'alt title': 'Quiz: 2x5',
    'children': [
        '10',
        '15',
        '7'
    ]
}

date_layers['10'] = {'parent': 'Release of The tortured poets society (2024)',
    'alt title': 'Quiz: Proper use of \'affect\' and \'effect\'',
    'children': [
        'Caffine doesn\'t effect me anymore',
        'Caffine doesn\'t affect me anymore',
    ]
}

date_layers['Caffine doesn\'t affect me anymore'] = {'parent': '10', 
    'alt title': 'When was the Ubyssey founded?',
    'children': [
        '1911',
        '1937',
        '1918',
        '1952',
        '1880',
    ]
}


date_layers['1918'] = {'parent': 'Caffine doesn\'t affect me anymore',
    'alt title': 'Finally.',
    'final': true,
    'children': [
        'Term 1',
        'Term 2'
    ]
}

function OptionList({layer, selected, setSelected}) {
    function addSelected(term, button) {
        if(selected.includes(term)) {
            selected = selected.filter(sel => sel !== term);
            document.getElementById(button).checked = false;
        } else {
            selected = [ ...selected, term ];
            document.getElementById(button).checked = true;
        }
        setSelected(selected);
    }

    const selectDate = (layer) => {
        document.getElementById('useless-searchbar').focus();
        ReactDOM.createRoot(document.getElementById('date-options')).render(<OptionList layer={layer} selected={selected} setSelected={select => setSelected(select)}/>);
    };

    if (layer in date_layers) {
            return (
                <>
                {date_layers[layer]['parent'] != null && <button className="options-header" onClick={() => selectDate(date_layers[layer]['parent'])}><ion-icon name="arrow-back-outline"></ion-icon> {(date_layers[layer]['alt title'] ? date_layers[layer]['alt title'] : layer)}</button>}
                <ul>{date_layers[layer]['children'].map((child, index) =>
                    <li key={index}>
                        { 'final' in date_layers[layer] ? 
                            <button onClick={() => {addSelected(child, "term-button-" + String(index));}} 
                            onTouchStart={() => {addSelected(child, "term-button-" + String(index));}}>
                                <input defaultChecked={selected.includes(child)} disabled id={"term-button-" + String(index)} type="checkbox" name="child" value="child"></input>
                                <label for={"term-button-" + String(index)}>{child}</label>
                            </button>
                        :
                            <button onClick={() => selectDate(child)} onTouchStart={() => selectDate(child)}>{child}</button>
                        }
                    </li>
                )}
                </ul>
                </>
            );
    } else {
        return (
        <>
        <button className="options-header" onClick={() => selectDate('root')} onTouchStart={() => selectDate('root')}><ion-icon name="arrow-back-outline"></ion-icon> Error start again!</button>
        <p>Sawwy we just added this option for fun 👉👈</p>
        </>
        );
    }
}

function StupidModal() {
    const [selected, setSelected] = useState([]);
    
    return (
        <dialog id="stupid-fucking-modal">
            <h1>Find Course Sections</h1>
            <ul>
                <li>
                    <label>Start Date within</label>
                    <div className="annoying-selector">
                        <ul className="selected-list">{selected.map((selection) =>
                            <li>{selection}</li>
                        )}</ul>
                        <input id="useless-searchbar" type="text" placeholder="Search"></input>
                        <div id="date-options" className="options">
                            <OptionList layer="root" selected={selected} setSelected={select => setSelected(select)}/>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="stupid-fucking-modal--buttons">
                <button className="cancel" onClick={() => {window.location.replace("/academics/registration")}}>Cancel</button>
                <button className="ok" onClick={() => {
                    if(selected.length > 0) {
                        window.location.replace("/pick-subject/?term=" + selected.join(","));
                    } else {
                        document.getElementById('stupid-fucking-modal').style.animation = "";
                        setTimeout(function () {document.getElementById('stupid-fucking-modal').style.animation = "angry 2s 1, shake 0.02s 50 alternate"}, 2);
                    }
                }}>OK</button>
            </div>
        </dialog>
    );
}

export function RegistrationIndex() {
    setPriorityQuipts(["We use these CUTE entrance animations to disguise the loading times! I bet you didn't even notice haha!"]);
    useEffect(() => {
        document.getElementById("academics-nav").classList.remove("bold");
        document.getElementById("registration-nav").classList.add("bold");
    }, []);

    
    var canRegister = false;

    var scienceTerms = ['CPSC', 'BIOL', 'CPEN', 'CIVL', 'PHYS', 'MATH', 'STAT', 'ASTR', 'DSCI'];
    var sciences = [];
    var arts = [];

    if(localStorage.getItem("courses") != null) {
        var courses = localStorage.getItem("courses").split(";");
        for(let a=0; a < courses.length; a++) {
            var course = courses[a];
            var isArts = true;
            for (let i=0; i<scienceTerms.length; i++) {
                if (course.includes(scienceTerms[i])) {
                    sciences.push(course);
                    isArts = false;
                    break;
                }
            }
            if (isArts) {
                arts.push(course);
            }
        }
        if (arts.length > 1 && sciences.length > 1){
            canRegister = true;
        }
    }

    return (
        <div className="section-container">
            <StupidModal />
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
                <h2>Saved Schedule</h2>
                {localStorage.getItem("courses")!=null ? 
                    <>
                        <p className={sciences.length >= 2 ? "met" : "not-met"}><span className="met"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="not-met"><ion-icon name="close-circle-outline"></ion-icon></span> {sciences.length}/2 Science Requirement (<span className="not-met">not </span>met)</p>
                        <ul>
                            {sciences.map(c =>
                            <li>{c}</li>
                            )}
                        </ul> 
                        <p className={arts.length >= 2 ? "met" : "not-met"}><span className="met"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="not-met"><ion-icon name="close-circle-outline"></ion-icon></span> {arts.length}/2 Arts Requirement (<span className="not-met">not </span>met)</p>
                        <ul>
                            {arts.map(c =>
                            <li>{c}</li>
                            )}
                        </ul> 
                    </>
                    : 
                    <>
                        <p>No Courses Saved.</p>
                        <p>Use "Find Course Sections" to add courses to your Saved Schedule!</p>
                    </>
                }
                <button className={"register-button" + (!canRegister ? ' inactive': '')} onClick={() => {
                    if(canRegister) {
                        window.location.replace("/register");
                    }
                }}>Register</button>
            </div>
            <div className="reg-links links">
                <ul>
                    <li className="section-box">
                        <h2>Registration</h2>
                        <ul>
                            <li><button onClick={openModal}>Find Course Sections (What is a course section?) {!canRegister && <span className="pointer">👈</span>}</button></li>
                        </ul>
                    </li>
                    <li className="section-box">
                        <h2>Quicklinks</h2>
                        <ul>
                            <li><a href="https://ssc.adm.ubc.ca/sscportal/" target="_blank">RIP 🪦😭</a></li>
                            <li><a href="https://ubc.ca.panopto.com/Panopto/Pages/Viewer.aspx?id=2f15ecad-04c8-44d4-9928-b15c012ca32b&start=0" target="_blank">Really funny video</a></li>
                            <li><a href="https://ubyssey.ca/tag/workday-student/" target="_blank"><i>The Ubyssey's</i> coverage!</a></li>
                        </ul>
                    </li>
                    <li className="section-box">
                        <h2>Who to blame</h2>
                        <ul>    
                            <li><a href="https://www.ubc.ca/" target="_blank">UBC</a></li>
                            <li><a href="https://www.workday.com/" target="_blank">Workday</a></li>
                            <li><a href="https://bog.ubc.ca/" target="_blank">Board of Governors</a></li>
                            <li><a href="https://irp.ubc.ca/" target="_blank">Integrated Renewal Program</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    );
}