import {Link, Outlet, useLocation} from "react-router-dom";
import React from "react";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function selectCourse(course) {
    window.confirm("Add '" + course + "' to your saved schedule");
}

export default function PickCourse() {

    let query = useQuery();

    let courses = {
        "math": [
            "Mathematics 100 - Not Sure I didn't take it", 
            "Mathematics 101 - My view of humanity is decidedly more negative after suffering those group projects",
            "Mathematics 200 - The biweekly assignments took 7 years off my expected lifespan",
            "Mathematics 220 - I actually liked this one",
            "Mathematics 221 - Linear Algebra made intolerable",
            "Mathematics 210 - Integrals made worse"
        ],
        "computer-science": [
            "Computer Science 110 - ", "CPSC 121", "CPSC 210", "CPSC 221", "CPSC 213" 
        ]
    }

    let classes = courses[query.get("course") ];
    console.log(classes);
    return (
        <div className="content-container">
            <div className="pageheader">
                <h1><Link to={"/"}></Link> Select Course Subject</h1>
            </div>

            <DuckHunt classes={classes}/>
            
            <footer>
            <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
            <p>Made with hate by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}

export function DuckHunt({classes=["mango", "shiba"]}) {

    var interval = setInterval(() => {
        var bg = document.getElementById("bg");
        bg.classList.add("movin-now");
        var boxes = document.getElementsByClassName('courseBox');
        console.log(boxes);
        for (let i=0; i <boxes.length; i++) {
            let box = boxes[i];
            var fits = false;
            while (!fits) {
                fits = true;
                var x = Math.random()*bg.offsetWidth * 0.9;
                var y = Math.random()*bg.offsetHeight * 0.9;
                
                for (let a=0; a < boxes.length; a++) {
                    if (x >= boxes[a].offsetLeft && x <= boxes[a].offsetLeft + boxes[a].offsetWidth && y >= boxes[a].offsetTop && y <= boxes[a].offsetTop + boxes[a].offsetHeight) {
                        fits = false;
                        break;
                    }
                    if (boxes[a].offsetLeft >= x && boxes[a].offsetLeft <= x + boxes[i].offsetWidth && boxes[a].offsetTop >= y && boxes[a].offsetTop <= y + boxes[i].offsetHeight) {
                        fits = false;
                        break;
                    }
                }
            }
            box.style.left = String(x) + "px";
            box.style.top = String(y) + "px";
        }
    }, 1500);

    console.log(classes);

    return (

            <div id="bg" className="sky">
                {classes.map((course) =>
                    <div className="courseBox" onClick={() => {selectCourse(course)}}>
                        <p>{course}</p>
                    </div>
                )}
            </div>
    );
}