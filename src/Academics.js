import {Link, Outlet} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { setQuipts, setPriorityQuipts } from "./AnnoyingMascot";

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
    setPriorityQuipts(["SHEEEEESH", "WOW! Not doing so good I see!"]);
    setQuipts(["Would be so embaressing if you opened this page in public HAHSAHAHAHAHAAHAHAH", "Planning on graduating, With THAT average?"]);
    return (
        <div className="section-container">
            <div className="section-box progress">
                <h2>Academic Progress</h2>
                <div className="progress-flex">
                    <div className="progress-circle">
                        <div className="progress-circle-filled"></div>
                        <div id="progress-inner" className="progress-circle-inner"><span>4%</span></div>
                    </div>
                    <div>
                        <h3>B.Sc., Major in Who Really Cares??? (Vancouver)</h3>
                        <div className="satisfied">12 Satisfied</div>
                        <div className="out-of">of 300 Requirements</div>    
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
                        <td colSpan="4"><p>I have no idea what this is so I can't make jokes about it</p></td>
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
        "Present time",
        "Radiation-dominated era",
        "Matter-dominated era",
        "Dark-energy-dominated era",
        "Stelliferous Era",
        "Heat death"
    ]
};

date_layers["Present time"] = {'parent': 'root',
    'children': [
        "Precambrian",
        "Paleozoic",
        "Mesozoic",
        "Cenozoic",
    ]
};

date_layers["Paleozoic"] = {'parent': 'Present time',
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

date_layers["Mesozoic"] = {'parent': 'Present time',
    'children': [
        "Triassic",
        "Jurassic",
        "Cretaceous",
    ]
};

date_layers["Cenozoic"] = {'parent': 'Present time',
    'children': [
        "Tertiary",
        "Quaternary",
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

date_layers["Quaternary"] = {'parent': 'Cenozoic',
    'children': [
        "Pleistocene",
        "Holocene",
    ]
};

date_layers["Holocene"] = {'parent': 'Present time',
    'children': [
        "Before Christ",
        "After Christ"
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

date_layers["After Christ"] = {'parent': 'Holocene',
    'children': [
        "Roman (c. 0 BCE – 400 CE)",
        "Early medieval period (c. 400 – 800 CE)",
        "Medieval period (800 – c. 1500)",
        "Post-medieval period (c. 1500 – c. 1800)",
        "Industrial/Modern",
    ]
};

date_layers["Industrial/Modern"] = {'parent': 'After Christ',
    'final': true,
    'children': [
        'Term 1',
        'Term 2'
    ]
};


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
                {date_layers[layer]['parent'] != null && <button className="options-header" onClick={() => selectDate(date_layers[layer]['parent'])}><ion-icon name="arrow-back-outline"></ion-icon> {layer}</button>}
                <ul>{date_layers[layer]['children'].map((child, index) =>
                    <li key={index}>
                        { 'final' in date_layers[layer] ? 
                            <button onClick={() => {
                                addSelected(child, "term-button-" + String(index));
                                }}>
                                <input defaultChecked={selected.includes(child)} disabled id={"term-button-" + String(index)} type="checkbox" name="child" value="child"></input>
                                <label for={"term-button-" + String(index)}>{child}</label>
                            </button>
                        :
                            <button onClick={() => selectDate(child)}>{child}</button>
                        }
                    </li>
                )}
                </ul>
                </>
            );
    } else {
        return (
        <>
        <button className="options-header" onClick={() => selectDate('root')}><ion-icon name="arrow-back-outline"></ion-icon> Error start again!</button>
        <p>fuckkk</p>
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
                <h2>Current Schedule</h2>
                <p>No Courses Registered</p>
            </div>
            <div className="reg-links links">
                <ul>
                    <li className="section-box">
                        <h2>Registration</h2>
                        <ul>
                            <li><button onClick={openModal}>Find Course Sections???</button></li>
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