import {Link, Outlet} from "react-router-dom";
import ReactDOM from 'react-dom/client';

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

function OptionList({layer}) {
    console.log("option list");
    console.log(layer);
    if (layer in date_layers) {
        return (
            <>
            {date_layers[layer]['parent'] != null && <button className="options-header" onClick={() => selectDate(date_layers[layer]['parent'])}><ion-icon name="arrow-back-outline"></ion-icon> {layer}</button>}
            <ul>{date_layers[layer]['children'].map((child, index) =>
                <li key={index}><button onClick={() => selectDate(child)}>{child}</button></li>
            )}
            </ul>
            </>
        )
    } else {
        return (
        <>
        <button className="options-header" onClick={() => selectDate('root')}><ion-icon name="arrow-back-outline"></ion-icon> Error start again!</button>
        <p>fuckkk</p>
        </>
        )
    }
}

const selectDate = (layer) => {
    document.getElementById('useless-searchbar').focus();
    ReactDOM.createRoot(document.getElementById('date-options')).render(<OptionList layer={layer} />);
}

export function RegistrationIndex() {
    return (
        <div className="section-container">
            <dialog id="stupid-fucking-modal">
                <h1>Find Course Sections</h1>
                <ul>
                    <li>
                        <label>Start Date within</label>
                        <div className="annoying-selector">
                            <input id="useless-searchbar" type="text" placeholder="Search"></input>
                            <div id="date-options" className="options">
                                <OptionList layer="root" />
                            </div>
                        </div>
                    </li>
                </ul>
            </dialog>
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