import {Link, Outlet, useLocation} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { setQuipts, setPriorityQuipts } from "./AnnoyingMascot";

gsap.registerPlugin(Flip);

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

var animationName = "";
var animationRepeat = false;
var animationTime;
var animationLastFrame;

function rickRoll() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const rickroll = JSON.parse(xhttp.responseText);
            animationName = 'rickroll';
            animationRepeat = true;

            //gridComics();
            //document.getElementById("results").classList.add("ease-in");

            const state = Flip.getState(".comics > *");

            var setup = setupComics(rickroll[0]['polygons'].length);
            setup = getNextFrame(setup, rickroll[0]);

            var comics = document.getElementsByClassName("comics");
            for(let i in setup) {
                comics[i].style.left = String(setup[i]['left']) + "px";
                comics[i].style.top = String(setup[i]['top']) + "px";
                comics[i].children[0].style.width = String(setup[i]['width']) + "px";
            }

            document.getElementById("results").classList.add("animating");

            Flip.from(state, {
                absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                duration: 2, 
                stagger: 0.1,
                ease: "power1.inOut"
                // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
            });

            setTimeout(() => {
                requestAnimationFrame(function(t) {animateFrame(t, setup, rickroll, 0, 'rickroll')});
                setPriorityQuipts(["We'veKnwown Each OtheR For So LoNNNG!!11!", "nNeverY GonNa Give You Up!!!", "NEEEver Goanna Let You dowN!", "tOGether FoREVEERRR... Oops wrong song!"]);
            }, 2000);
        }
    };

    xhttp.open("GET", "/rickroll.json", true);
    xhttp.send();
}

function badApple() {

    if (animationName == "badapple") {
        animationName = "";
        return;
    }
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const badapple = JSON.parse(xhttp.responseText);
            // 3110
            animationName = 'badapple';
            animationRepeat = false;

            const state = Flip.getState(".comics > *");

            var setup = setupComics(badapple[0]['polygons'].length);
            setup = getNextFrame(setup, badapple[0]);

            var comics = document.getElementsByClassName("comics");
            for(let i in setup) {
                comics[i].style.left = String(setup[i]['left']) + "px";
                comics[i].style.top = String(setup[i]['top']) + "px";
                comics[i].children[0].style.width = String(setup[i]['width']) + "px";
            }

            document.getElementById("results").classList.add("animating");

            Flip.from(state, {
                absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                duration: 2, 
                stagger: 0.1,
                ease: "power1.inOut"
                // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
            });

            setTimeout(() => {
                requestAnimationFrame(function(t) {animateFrame(t, setup, badapple, 0, 'badapple')});
            }, 2000);
        }
    };

    xhttp.open("GET", "/badapple.json", true);
    xhttp.send();
}

function setupComics(p) {
    document.getElementById("results").classList.add("animating");
    var comics = document.getElementsByClassName("comics");
    var setup = [];

    for (let i=0; i<comics.length; i++) {
        comics[i].style.display = "none";
    }

    for (let i=0; i< p && i<comics.length; i++) {
        comics[i].style.display = "block";
        //comics[i].style.position = "absolute";
        setup.push({
            'width': 0,
            'aspect-ratio': comics[i].children[0].naturalHeight / comics[i].children[0].naturalWidth,
        });
    }

    return setup;
}

function getNextFrame(setup, frame) {
    var fullwidth = document.getElementById("results").offsetWidth;
    var scale = 1;
    if (document.getElementById("results").offsetHeight <= document.getElementById("results").offsetWidth) {
        scale = (document.getElementById("results").offsetHeight-40)/frame["height"];
    } else {
        scale = fullwidth/frame["width"];
    }

    const polygons = frame['polygons'];

    for (var i in polygons) {
        setup[i]['left'] = Math.round(polygons[i]['origin'][0] * scale);
        setup[i]['top'] = Math.round(polygons[i]['origin'][1] * scale);
    }
    var margin = 1;
    //showEdges(frame, scale)
    while (margin < fullwidth) {
        for (var i in polygons) {
            setup = growImage(i, setup, frame, fullwidth, scale, 1, 1, margin); 
            setup = growImage(i, setup, frame, fullwidth, scale, 1, -1, margin);   
            setup = growImage(i, setup, frame, fullwidth, scale, -1, 1, margin); 
            setup = growImage(i, setup, frame, fullwidth, scale, -1, -1, margin);   
        }
        margin = margin*2;
    }

    return setup;
}

function animateFrame(time, setup, frames, frameNum, name) {

    var isNextFrame = false;
    if (animationLastFrame == null) {
        animationLastFrame = time;
        isNextFrame = true;
    } else if (time - animationLastFrame >= 50) {
        animationLastFrame = time;
        isNextFrame = true;
    }

    if (isNextFrame) {
        var comics = document.getElementsByClassName("comics");
        for(let i in setup) {
            comics[i].style.left = String(setup[i]['left']) + "px";
            comics[i].style.top = String(setup[i]['top']) + "px";
            comics[i].children[0].style.width = String(setup[i]['width']) + "px";
        }

        setup = setupComics(frames[frameNum]['polygons'].length);
        setup = getNextFrame(setup, frames[frameNum]);

        var endAnim = true;
        if (animationName == name) {
            if (frameNum < frames.length-1) {
                requestAnimationFrame(function(t) {animateFrame(t, setup, frames, frameNum+1, name)});
                endAnim = false;
            } else if (animationRepeat == true) {
                requestAnimationFrame(function(t) {animateFrame(t, setup, frames, 0, name)});
                endAnim = false;
            }
        }

        if (endAnim == true) {
            const state = Flip.getState(".comics > *");
            setPriorityQuipts([]);
            animationName = "";
            document.getElementById("results").classList.remove("animating");

            for(let i=0; i<comics.length; i++) {
                comics[i].children[0].style.removeProperty("width");
                comics[i].children[0].style.removeProperty("height");
                comics[i].style.removeProperty("left");
                comics[i].style.removeProperty("top");
                comics[i].style.removeProperty("height");
                comics[i].style.removeProperty("display");
            }

            Flip.from(state, {
                absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                duration: 2, 
                stagger: 0.1,
                ease: "power1.inOut"
                // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
            });
        }

    } else {
        requestAnimationFrame(function(t) {animateFrame(t, setup, frames, frameNum, name)});
    }
}

function showEdges(frame, scale) {
    const polygons = frame['polygons'];
    document.getElementById("edges").innerHTML = "";
    for (var p in polygons) {
        var edgeElement = document.createElement("div");
        edgeElement.style.left = String(polygons[p]['origin'][0] * scale) + "px";
        edgeElement.style.top = String(polygons[p]['origin'][1] * scale) + "px";
        edgeElement.classList.add("origin");
        document.getElementById("edges").appendChild(edgeElement);

        for (var e in polygons[p]['edges']) {
            var edgeElement = document.createElement("div");
            edgeElement.style.left = String(polygons[p]['edges'][e][0] * scale) + "px";
            edgeElement.style.top = String(polygons[p]['edges'][e][1] * scale) + "px";
            edgeElement.classList.add("edge");
            document.getElementById("edges").appendChild(edgeElement);
        }
    }
}

function growImage(i, setup, frame, fullwidth, scale, dirX, dirY, margin) {
    const polygons = frame['polygons'];
    var x = setup[i]['left'];
    var y = setup[i]['top'];
    var w = setup[i]['width'];
    const aspectRatio = setup[i]['aspect-ratio'];;
    var step = margin; 

    var newBox;

    while (step > 1 ) {
        if(x+ w+(step*dirX) < fullwidth && x +(step*dirX) >= 0) {
            var noIntersect = true;

            if(dirX < 0) {
                var newX = x-step;
            } else {
                var newX = x;
            }
            if(dirY < 0) {
                var newY = y - step*aspectRatio;
            } else {
                var newY = y;
            }

            newBox = [newX, newY, w+step, (w+step)*aspectRatio];

            for (var p in polygons) {
                const polygon = polygons[p]
                for (var e in polygon['edges']) {
                    const edge = [Math.round(polygon['edges'][e][0] * scale), Math.round(polygon['edges'][e][1] * scale)];

                    if (isInsidePoint(newBox, edge)) {
                        noIntersect = false;
                        break;
                    }
                }
                if (!noIntersect) {
                    break;
                }
            }
            /*
            if (noIntersect) {
                for(var b in polygons) {
                    if (b == i) {
                        continue;
                    }

                    const bx = comics[b].offsetLeft;
                    const by = comics[b].offsetTop;
                    const bw = comics[b].offsetWidth;
                    const bh = bw * (comics[b].naturalHeight/comics[b].naturalWidth);

                    const otherBox = [bx, by, bw, bh];
                    
                    if (isInsideBox(newBox, otherBox) || isInsideBox(otherBox, newBox)) {
                        noIntersect = false;
                        break;
                    }
                }
            }
            */

            if (noIntersect) {
                w = w + step;
                setup[i]['width'] = Math.round(w);

                if(dirX < 0) {
                    x = x - step;
                    setup[i]['left'] = x;
                }
                
                if(dirY < 0) {
                    y = y - step*aspectRatio;
                    setup[i]['top'] = y;
                }

            }
        }
        step = step / 2;
    }

    return setup;
}

function isInsidePoint(box, point) {
    return (point[0] >= box[0] && point[0] <= box[0] + box[2] && point[1] >= box[1] && point[1] <= box[1] + box[3]);
}

function isInsideBox(box, otherBox) {
    if (isInsidePoint(box, [otherBox[0],otherBox[1]]) || isInsidePoint(box, [otherBox[0] + otherBox[2],otherBox[1]]) || isInsidePoint(box, [otherBox[0],otherBox[1] + otherBox[3]]) || isInsidePoint(box, [otherBox[0] + otherBox[2],otherBox[1] + otherBox[3]])) {
        return true;
    }
    
    return false;
}

function maybeRick() {
    if (document.body.getAttribute("moved") == 'true') {
        document.body.setAttribute("moved", 'false');
    } else if (animationName == ""){
        rickRoll();
    }
    const t = setTimeout(maybeRick, 7000);
}

function reorderSubjects(order) {
    animationName = "";
    setPriorityQuipts([]);
    const r = document.getElementById("results");

    const state = Flip.getState(".comics > *");
    for(let i=0; i<order.length; i++) {
        r.insertBefore(document.getElementById(order[i]), r.children[i+1]);
    }
    Flip.from(state, {
        absolute: true, // uses position: absolute during the flip to work around flexbox challenges
        duration: 2, 
        stagger: 0.1,
        ease: "power1.inOut"
        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
    });

}

export function PickSubject() {
    let query = useQuery();

    const subjects = [
        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'linguistics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},
        {'name': 'statistics', 'comic': 'curve_fitting.png'},
        {'name': 'cognitive-systems', 'comic': 'superintelligent_ais.png'},
        {'name': 'sociology', 'comic': 'simple_answers.png'},
        
        {'name': 'biology', 'comic': 'date.png'},
        {'name': 'physics', 'comic': 'physics_confession.png'},
        {'name': 'computer-engineering', 'comic': 'voting_software.png'},
        {'name': 'civil-engineering', 'comic': 'highway_engineer_pranks.png'},
        {'name': 'geography', 'comic': 'map_projections.png'},

        {'name': 'english', 'comic': 'university_commas.png'},
    ];
    
    if(!document.body.hasAttribute("moved")) {
        const waitForRick = setTimeout(maybeRick, 7000);
        document.body.setAttribute("moved", "true");
        document.body.addEventListener("mousemove", ()=> {
            document.body.setAttribute("moved", "true");
            if (animationName == "rickroll") {
                animationName = "";
                setPriorityQuipts([]);
            }
        });
    }

    return (
        <div className="content-container">
        <div className="pageheader">
            <h1><Link to={"/"}></Link> Select Course Subject</h1>
        </div>
        <div className="info-bar">

            <div className="info-segment-idk">
                <label>Start Date within</label>
                <ul>{query.get("term").split(",").map((selection) =>
                    <li>{selection}</li>
                )}</ul>
            </div>
        </div>

        <div className="terrible-spreadsheet-mf">

                <div className="filters">
                    <h2>Current Search???</h2>
                    <h2>Order by</h2>
                    <button onClick={() => reorderSubjects([
                        'computer-engineering',
                        'computer-science',
                        'political-science',
                        'economics',
                        'physics',
                        'sociology',
                        'biology',
                        'civil-engineering',
                        'astronomy',
                        'math', 
                        'psychology',
                        'cognitive-systems',
                        'statistics',
                        'geography',
                        'linguistics',
                        'english',
                    ])}>Most Likely to be Responsible for Humanity's Inevitable Collapse</button>
                    <button onClick={() => reorderSubjects([
                        'psychology',
                        'english',
                        'sociology',
                        'biology',
                        'astronomy',
                        'economics',
                        'statistics',
                        'cognitive-systems',
                        'physics',
                        'political-science',
                        'linguistics',
                        'computer-engineering',
                        'computer-science',
                        'math',
                        'geography',
                        'civil-engineering',
                    ])}>Usefulness in the Courtship Process</button>
                    <button onClick={() => badApple()}>Bad Apple</button>
                </div>
                <div className="results" id="results">
                    <h2>{subjects.length} Results</h2>
                    <ul>{subjects.map(subject => 
                        <button className="comics" id={subject.name} onClick={() => {window.location.assign("/pick-course/?course=" + subject.name)}}>
                            <img src={"https://imgs.xkcd.com/comics/" + subject.comic}></img>
                        </button>
                    )}</ul>
                    <div id="edges"></div>
                </div>
        </div>

        <footer>
            <img src={'/itdoesntwork.svg'}></img>
            <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and Ubyssey Humour Contributors. © 2024 Ubyssey</p>
        </footer>
    </div>
    );
}