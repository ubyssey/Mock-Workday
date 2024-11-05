import {Link, Outlet, useLocation} from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom/client';

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function throwProjectile(e) {
    var p = document.createElement('img');
    p.classList.add('projectile');
    p.src = '/throwing_items/' + String(Math.floor(Math.random()*16)+1) + '.gif';
    p.setAttribute('draggable', false);
    document.getElementById('projectile').appendChild(p);
    p.style.bottom = "calc(100vh - " + String(e.pageY) + "px)"
    p.style.left = String(e.pageX) + "px";
    setTimeout(() => {
        var boxes = document.getElementsByClassName('courseBox');
        for (let i=0; i <boxes.length; i++) {
            let rec = boxes[i].getBoundingClientRect();
            if ((e.pageX >= rec.left && e.pageX <= rec.right) && (e.pageY >= rec.top && e.pageY <= rec.bottom)){
                if (document.getElementById('modal').childNodes.length == 0) {
                    const root = ReactDOM.createRoot(document.getElementById('modal'));
                    root.render(<SelectCourse course={boxes[i].getAttribute('name')} />);
                }
            }
        }
        p.remove();
    }, 725);
}

function SelectCourse({course}) {
    function addCourse() {
        if (active) {
            var courses = [];
            if (localStorage.getItem('courses') != null) {
                courses = localStorage.getItem("courses").split(','); 
            }
            courses.push(course);
            localStorage.setItem('courses', courses.join(','));
            console.log("'" + course + "' added to planned courses!");
            alert("'" + course + "' added to planned courses!");
            cancel();
        }
    }
    function cancel() {
        document.getElementById('select-course-modal').remove();
    }

    const [time, setTime] = React.useState(0);
    const [dayOfWeek, setDayOfWeek] = React.useState(0);

    setTimeout(() => document.getElementById('select-course-modal').showModal(), 250);
    
    let available = [];

    var active = false;
    for (let i=0; i<course.length%5 + 1; i++) {
        var a = {'time': ((course.length % (5+(3*i))) * 1800) + 10*(60*60)};
        a['active'] = 'inactive';
        if (i%3==0) {
            a['days'] = [0, 2,4];
            a['name'] = 'Monday, Wednesday, Friday';
            a['length'] = (60*60);
        } else if (i%3==1) {
            a['days'] = [1, 3];
            a['name'] = 'Tuesday, Thursday';
            a['length'] = 2* (60*60);
        } else {
            a['days'] = [4];
            a['name'] = 'Friday';
            a['length'] = 3* (60*60);
        }

        if (!active && time >= a['time'] && time < a['time'] + a['length'] && a['days'].includes(dayOfWeek)) {
            a['active'] = 'active';
            active = a;
        }

        a['name'] = a['name'] + ' - ' + twoDigit(Math.floor(a['time']/ (60*60))) + ":" + twoDigit(Math.floor(a['time']/ (60))%60) + ' to ' + twoDigit(Math.floor((a['time']+a['length'])/ (60*60))) + ":" + twoDigit(Math.floor((a['time']+a['length'])/ (60))%60);
        available.push(a);
    }

    return (
        <dialog id="select-course-modal">
            <h1>{course}</h1>
            <div className="flex">
            <div className="left">
                <Clock time={time} setTime={setTime} dayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek}/>
            </div>
            <div className="right">
                <h2>Available times</h2>
                <ul>{available.map((a, i) =>
                    <li key={i} className={a['active']}>{a['name']}</li>
                )}
                </ul>
            </div>
            </div>
            <div className="stupid-fucking-modal--buttons">
                <button className="cancel" onClick={cancel}>Cancel</button>
                <button className={'ok' + (!active ? ' inactive' : '')} onClick={addCourse}>Ok</button>
            </div>
        </dialog>
    );
}

function twoDigit(n) {
    if (String(Math.floor(n)).length < 2) {
        return "0" + String(Math.floor(n));
    } else {
        return String(Math.floor(n))
    }
}

function Clock({time, setTime, dayOfWeek, setDayOfWeek}) {
    const DOWNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    function wind(e) {
        let full = 24 * 60 * 60;
        var newTime = time + (60*30);
        if (newTime >= full) {
            newTime = newTime - full;
            setDayOfWeek((dayOfWeek + 1) % 7);
        }
        setTime(newTime);
    }
    function getSeconds(t) {
        return t % 60;
    }
    function getMinutes(t) {
        return Math.floor(t/(60) % 60); 
    }
    function getHours(t) {
        return t/(60*60);
    }

    return (
        <div className="clock-container">
        <p className="dayOfWeek">{DOWNames[dayOfWeek]}</p>
        <div className="clock" title={twoDigit(getHours(time)) + ":" + twoDigit(getMinutes(time)) + ":" + twoDigit(getSeconds(time))} onScroll={(e) => wind(e)} onClick={(e) => wind(e)}>
            <div className="hands">
                <div className="seconds" style={{'transform': 'rotate(' + String(time*6 - 90) + "deg)"}}></div>
                <div className="hours" style={{'transform': 'rotate(' + String(time/120 - 90) + "deg)"}}></div>
            </div>
        </div>
        <p className="instruction">Click clock to set time</p>
        </div>
    );
}

export default function PickCourse() {

    let query = useQuery();

    let courses = {
        "math": [
            "Math 100 - Not Sure I didn't take it", 
            "Math 101 - My view of humanity is decidedly more negative after suffering those group projects",
            "Math 200 - The biweekly assignments took 7 years off my expected lifespan",
            "Math 220 - PROVE IT! (I actually liked this one)",
            "Math 221 - Linear Algebra made intolerable",
            "Math 210 - Integrals made worse",
        ],
        "computer-science": [
            "CPSC 110 - Introduction to Typing on a Computer and Hating Racket",
            "CPSC 121 - Introduction to Thinking about a Computer",
            "CPSC 210 - Introduction to Using a Computer",
            "CPSC 221 - Introduction to Using a Computer Correctly",
            "CPSC 213 - Introduction to Becoming a Computer Yourself",
            "CPSC 313 - Intermediate Study in Forgetting Your Humanity and Becoming Machine",
            "CPSC 320 - Intermediate Study in How to use a Computer Correctly",
            "CPSC 344 - Human-Computer Interaction 1: Wondering what you would do if you were still a person",
            "CPSC 444 - Human-Computer Interaction 2: Advanced wondering what you would do if you were still a person",
        ],
        "political-science": [
            'POLI 100 - Democracy: yay or nay?',
            'POLI 101 - Introduction to Canadian Government: In a healthy democracy we would all know this stuff but alas...',
            'POLI 302 - Public Administration (for nerds)',
            'POLI 310 - Playing the Diplomacy Board Game',
            'POLI 320 - I Listen to Pod Save America So This Should be Pretty Easy for Me (cracks knuckles, reclines in chair)',
            'POLI 340 - So why is everything so fucked these days?',
            'POLI 377 - AAAAAAAAAAAAAAAAAHHHHHHH',
        ],
        'economics': [
            'ECON 101 - Markets are good and cool (except when they\'re not)',
            'ECON 102 - That John Maynard Keynes "in the long run we are all dead" quote goes pretty hard, right?',
            'ECON 374 - Georgism sounds interesting.',
            'ECON 421 - We are all just agents optimizing for utility, with Applications',
            'ECON 472 - Malthusian Collapse When?',
            /*
            'ECON 234 - Wealth and Poverty of Nations',
            'ECON 204 - Intermediate Microeconomic Analysis',
            'ECON 210 - Microeconomic Policy',
            'ECON 255 - Understanding Globalization',
            'ECON 226 - Making Sense of Economic Data',
            'ECON 301 - Intermediate Microeconomic Analysis I',
            'ECON 325 - Introduction to Empirical Economics',
            'ECON 326 - Methods of Empirical Research in Economics',
            'ECON 335 - Fertility, Families and Human Migration',
            'ECON 370 - Benefit-Cost Analysis and the Economics of Project Evaluation',
            'ECON 490 - Seminar in Applied Economics',
            'ECON 421 - Introduction to Game Theory and Applications',
            'ECON 472 - Economics of Renewable Resources',
            'ECON 493 - Advanced Empirical Methods for International Economics',
            'ECON 482 - The Economic Consequences of Religion',*/
        ],
        'linguistics': [
            'LING 100 - Introduction to Thinking A Lot About How Your Tongue Moves Around Within Your Mouth',
            'LING 101 - Tom Scott\'s Videos were good',
            'LING 200 - I liked Tom Scott\'s Videos',
            'LING 315 - Rejecting the Sapir-Wohrf Hypothesis',
            'LING 342 - Defining Natural Systems with Logic is so Cool',
            /*
            'LING 142 - Language and Technology',
            'LING 200 - Linguistic Theory and Analysis I',
            'LING 201 - Linguistic Theory and Analysis II',
            'LING 222 - Language Acquisition',
            'LING 300 - Studies in Grammar',
            'LING 311 - Studies in Phonology',
            'LING 313 - Introduction to Linguistic Phonetics and Speech Science',
            'LING 327 - Introduction to Semantics',
            'LING 333 - Research Methods for Linguistics',
            'LING 242 - Computational Tools for Linguistic Analysis',
            'LING 315 - Sociolinguistics',
            'LING 319 - Historical Linguistics',
            'LING 345 - Pragmatics',
            'LING 405 - Morphology',
            'LING 342 - Computational Models of Language',
            'LING 415 - Language Across Time, Geography, and Society',
            'LING 447 - Topics in Linguistics',
            'LING 451 - Acquisition of Phonology',
            'LING 452 - Acquisition of Syntax'*/
        ],
        'pyschology': [
            'PSYC 100 - Introduction to "whoa those experiments performed during the cold war were not ethical at all"',
            'PSYC 102 - Introduction to Brains Being Weird',,
            'PSYC 305 - I\'m INFP. - wait no. I\'m INTP. Or maybe I\'m actually a \'Shy Extrovert\'!',
            'PSYC 355 - What the heck is wrong with us?',
            'PSYC 312 - Freud was kinda dumb',
            /*
            'PSYC 101 - Introduction to Biological and Cognitive Psychology',
            'PSYC 102 - Introduction to Developmental, Social, Personality, and Clinical Psychology',
            'PSYC 217 - Research Methods',
            'PSYC 218 - Analysis of Behavioural Data',
            'PSYC 302 - Infancy',
            'PSYC 304 - Brain and Behaviour',
            'PSYC 401 - Clinical Psychology',
            'PSYC 404 - Psychology of Religion',
            'PSYC 409 - Cognitive Neuropsychology',*/
        ],
        'astronomy': [
            'ASTR 102 - Introduction to Inconcievably Massive Celestial Objects. Now with Philosophical Implications!',
            'ASTR 200 - wtf is darkmatter?',
            'ASTR 300 - Galaxies for Galaxy Brains',
            'ASTR 311 - Space. The Final Frontier. These are the voyages of the starship Enterprise...',
            'ASTR 333 - Exoplanets and Astrobiology: We are still looking ;(',
            /*
            'ASTR 200 - Frontiers of Astrophysics',
            'ASTR 205 - Stars and Stellar Populations',
            'ASTR 300 - Galaxies',
            'ASTR 333 - Exoplanets and Astrobiology',
            'ASTR 349 - Directed Research Project in Astronomy',
            'ASTR 406 - High-Energy Astrophysics',
            'ASTR 407 - Planetary Science',
            'ASTR 404 - Astronomical and Astrophysical Measurements',
            'ASTR 405 - Astronomical Laboratory',*/
        ],
        'statistics': [
            'DSCI 100 - Using an R library',
            'STAT 200 - Elementary Statistics 💅',
            'STAT 251 - Nothing Standard or Normal about the Standard Normal Distribution (feat. 3b1b)',
            'STAT 300 - Introduction to the Bayes\' Theorem as Religion',
            'STAT 305 - Numerology',
            /*
            'STAT 200 - Elementary Statistics for Applications',
            'STAT 302 - Introduction to Probability',
            'STAT 305 - Introduction to Statistical Inference',
            'STAT 306 - Finding Relationships in Data',
            'STAT 321 - Stochastic Signals and Systems',
            'STAT 404 - Design and Analysis of Experiments',
            'STAT 450 - Case Studies in Statistics',
            'STAT 445 - Introduction to Exploratory Data Analysis',
            'STAT 406 - Methods for Statistical Learning',
            'STAT 443 - Time Series and Forecasting',
            */
        ],
        'cognitive-systems': [
            'COGS 200 - Introduction to Surface Level Pondering',
            'COGS 300 - Designing little guys',
            'COGS 401 - Cool Seminars',
            'COGS 402 - Now its your turn!',
            /*
            'COGS 300 - Understanding and Designing Cognitive Systems',
            'COGS 303 - Research Methods in Cognitive Systems',
            'COGS 401 - Seminar in Cognitive Systems',
            'COGS 402 - Research in Cognitive Systems',
            */
        ],
        'sociology': [
            'SOCI 100 - Introduction to \'We Live in a Society\'',
            'SOCI 101 - Reshaping Your Entire Worldview + An Essay You Will Fail',
            'SOCI 200 - Things are not good'
            /*
            'SOCI 210 - Canadian Social Structure',
            'SOCI 220 - Sociology of Indigenous Peoples',
            'SOCI 250 - Crime and Society',
            'SOCI 260 - Technology, Work and Society', 
            'SOCI 301 - Sociology of Development and Underdevelopment',
            'SOCI 302 - Ethnic and Racial Inequality',
            'SOCI 312 - Gender Relations',
            'SOCI 342 - Consumers and Consumption',
            'SOCI 360 - Sociology and Natural Resources',
            'SOCI 414 - Feminist Theory',
            'SOCI 415 - Theories of Family and Kinship',
            'SOCI 420 - Sociology of the Environment',
            'SOCI 444 - Sociology of Aging',
            'SOCI 466 - Sociology of Education',
            */
        ],
        'biology': [
            'MOUT 101 - Mouth pipetting',
            'BIOL 111 - I\'m just here for the science credit!',
            'BIOL 121 - \'On the Origin of Species\'? more like ',
            'BIOL 153 - Human Biology',
            'BIOL 310 - A Scent and a Sound, I\'m Lost and I\'m Found and I\'m Hungry Like the Wolf',
            'BIOL 317 - Weed Science (real title)',
            'BIOL 335 - Genetics (but be chill about it okay)',
            'BIOL 348 - Biology of Cannabis (real)',

            /*
            'BIOL 112 - Biology of the Cell',
            'BIOL 121 - Genetics, Evolution and Ecology',
            'BIOL 140 - Laboratory Investigations in Life Science',
            'BIOL 153 - Human Biology',
            'BIOL 155 - Human Biology',
            'BIOL 204 - Vertebrate Structure and Function',
            'BIOL 205 - Comparative Invertebrate Zoology',
            'BIOL 203 - Eukaryotic Microbiology',
            'BIOL 233 - Genetics for Life',
            'BIOL 335 - Molecular Genetics',
            'BIOL 301 - Biomathematics',
            'BIOL 300 - Fundamentals of Biostatistics',
            'BIOL 310 - Introduction to Animal Behaviour',
            'BIOL 402 - Aquatic Ecology',
            'BIOL 413 - Zoogeography',
            'BIOL 417 - Phylogenetic Biology',
            'BIOL 427 - Ornithology and Herpetology',
            */
        ],
        'physics': [
            'PHYS 473 - Applied Nuclear Physics (WHAT?!!!)',
            /*
            'PHYS 117 - Dynamics and Waves',
            'PHYS 118 - Electricity, Light and Radiation',
            'PHYS 119 - Experimental Physics Lab',
            'PHYS 200 - Relativity and Quanta',
            'PHYS 216 - Intermediate Mechanics',
            'PHYS 219 - Intermediate Experimental Physics I',
            'PHYS 229 - Intermediate Experimental Physics II',
            'PHYS 309 - Electrical Laboratory',
            'PHYS 312 - Introduction to Mathematical Physics',
            'PHYS 304 - Introduction to Quantum Mechanics',
            'PHYS 354 - Electric and Magnetic Fields',
            'PHYS 408 - Optics',
            'PHYS 409 - c Experimental Physics',
            'PHYS 412 - Quantum Physics',
            'PHYS 438 - Zoological Physics',
            'PHYS 473 - Applied Nuclear Physics',
            */
        ],
        'computer-engineering': [
            'CPEN 211 - Introduction to lil\' baby computers',
            'CPEN 481 - Economic Analysis of Engineering Projects (hint: it always takes longer than you expected)',
            'CPEN 281 - The Turbo Encabulator and Other Innovations in Applied Science',
            'CPEN 311 - Design of Write-only Memory Systems',

            /*
            'CPEN 281 - Technical Communication',
            'CPEN 311 - Digital Systems Design',
            'CPEN 331 - Operating Systems',
            'CPEN 491 - Computer Engineering Capstone Design Project',
            */
        ],
        'civil-engineering': [
            /*
            'CIVL 200 - Engineering and Sustainable Development',
            'CIVL 230 - Solid Mechanics I',
            'CIVL 300 - Construction Engineering and Management',
            'CIVL 305 - Introduction to Environmental Engineering',
            'CIVL 315 - Fluid Mechanics II',
            'CIVL 340 - Transportation Engineering I',
            'CIVL 413 - Design of Earth Dams and Containment Structures',
            'CIVL 402 - Professionalism and Law in Civil Engineering',
            'CIVL 409 - Municipal Engineering',
            'CIVL 446 - Engineering Design and Analysis II',
            */
        ],
        'geography': [
            'GEOG 121 - Geography, Environment and Globalization',
            'GEOG 202 - Collective action problems are difficult',
            'GEOG 210 - Omg FIELD TRIPS?!',
            'GEOG 211 - The State of the Earth (its bad probably)',
            'GEOG 300 - Geography of [something]',
            /*
            'GEOG 108 - Introduction to Physical Geography I',
            'GEOG 109 - Introduction to Physical Geography II',
            'GEOG 128 - Human Geography: Space, Place, and Community',
            'GEOG 129 - Human Geography: Resources, Development, and Society',
            'GEOG 271 - Geographic Data Analysis',
            'GEOG 272 - Cartography and Remote Sensing',
            'GEOG 200 - Atmospheric Environments',
            'GEOG 207 - Introduction to Biogeography',
            'GEOG 301 - Mechanisms of Global Change',
            'GEOG 307 - Advanced Biogeography',
            'GEOG 317 - The Physical Environment of British Columbia',
            'GEOG 351 - Urban Social Geography',
            'GEOG 310 - Environment and Resources',
            'GEOG 414 - Applied Climatology',
            'GEOG 436 - Coastal Geomorphology',
            'GEOG 437 - Terrain Analysis',
            'GEOG 423 - Development of Environmental Thought',
            'GEOG 435 - Wine Geographies',
            */
        ],
        'english': [
            'ENGL 100 - Reading some things. Maybe some writing too.',
            'ENGL 220 - Reading some old things and thinking about them',
            'PEAS 301 - Spinning Thread into Gold',
            'ENGL 444 - Becoming Employable (Section Cancelled)',
        ],
        'philosophy': [
            'PHIL 100 - Introduction to Thinking',
            'PHIL 103 - Defining words',
            'PHIL 104 - Making things up',
            'PHIL 220 - wait logic and validity actually has an objective definition?',
            'PHIL 221 - What did unemployed rich guys in historical central europe think about badly defined thought experiments?',
            'PHIL 230 - Introduction to Ethics (in case you forgot)',
            'PHIL 321 - Decision Theory: Adding Numbers Up and Seeing Which is Larger',
        ]
    }

    let classes = courses[query.get("course") ];
    return (
        <div className="content-container">
            <div className="pageheader">
                <h1><Link to={"/"}></Link> Select Course Subject</h1>
            </div>

            <DuckHunt classes={classes}/>
            
            <footer>
                <img src={'/itdoesntwork.svg'}></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}

function randomPos() {
    if(document.getElementById("bg")) {
        var bg = document.getElementById("bg");
        bg.classList.add("movin-now");
        var boxes = document.getElementsByClassName('courseBox');
        var futureBoxes = [];
        for (let i=0; i <boxes.length; i++) {
            let box = boxes[i];
            var fits = false;
            var trys = 10;
            while (!fits && trys > 0) {
                fits = true;
                var x = 50 + Math.random()*(bg.offsetWidth - box.offsetWidth - 100);
                var y = 50 + Math.random()*(bg.offsetHeight - box.offsetHeight - 100);
                
                for (let a=0; a < futureBoxes.length; a++) {
                    if ((x >= futureBoxes[a].left && x <= futureBoxes[a].left + futureBoxes[a].width) || (futureBoxes[a].left >= x && futureBoxes[a].left <= x + box.offsetWidth)) {
                        if((y >= futureBoxes[a].top && y <= futureBoxes[a].top + futureBoxes[a].height) || (futureBoxes[a].top >= y && futureBoxes[a].top <= y + box.offsetHeight))
                        {
                            fits = false;
                            break;
                        }
                    }
                }
                trys = trys - 1;
            }
            futureBoxes.push({"left": x, "top": y, 'width': box.offsetWidth, 'height': box.offsetHeight});
        }
        for (let a=0; a < futureBoxes.length; a++) {
            boxes[a].style.left = String(futureBoxes[a].left) + "px";
            boxes[a].style.top = String(futureBoxes[a].top) + "px";
        }
        setTimeout(randomPos, 1250);
    }
}

export function DuckHunt({classes=["mango", "shiba"]}) {

    setTimeout(randomPos, 500);

    return (
    <>
            <div id="modal"></div>
            <div id="bg" className="sky" onClick={(e) => throwProjectile(e)}>
                {classes.map((course) =>
                    <div className="courseBox" name={course}>
                        <p>{course.split(" - ")[0]}</p>
                    </div>
                )}
            </div>
            <div id="projectile"></div>
    </>
    );
}