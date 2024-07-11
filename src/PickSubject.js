import {Link, Outlet, useLocation} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import React from "react";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

var animationName = "";
var animationRepeat = false

function rickRoll() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            const rickroll = JSON.parse(xhttp.responseText);
            animationName = 'rickroll';
            animationRepeat = true;
            animateFrame(rickroll, 0, 'rickroll');
        }
    };

    xhttp.open("GET", "/rickroll.json", true);
    xhttp.send();
}

function badApple() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            const badapple = JSON.parse(xhttp.responseText);
            animationName = 'badapple';
            animationRepeat = false;
            animateFrame(badapple, 0, 'badapple');
        }
    };

    xhttp.open("GET", "/badapple.json", true);
    xhttp.send();
}

function animateFrame(frames, frameNum, name) {
    var frame = frames[frameNum];
    var comics = document.getElementsByClassName("comics");

    for (let i=0; i<comics.length; i++) {
        comics[i].style.display = "none";
    }

    var fullwidth = document.getElementById("results").offsetWidth;
    var scale = 1;
    if (document.getElementById("results").offsetHeight <= document.getElementById("results").offsetWidth) {
        scale = document.getElementById("results").offsetHeight/frame["height"];
    } else {
        scale = fullwidth/frame["width"];
    }

    const polygons = frame['polygons'];
    
    /*
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
    */
    

    for (var i in polygons) {
        const x = polygons[i]['origin'][0] * scale;
        const y = polygons[i]['origin'][1] * scale;

        comics[i].style.display = "block";
        comics[i].style.position = "absolute";
        comics[i].style.left = String(Math.round(x)) + "px";
        comics[i].style.top = String(Math.round(y)) + "px";
        comics[i].style.width = "0px";
    }

    var margin = 1;
    while (margin < fullwidth) {
        for (var i in polygons) {
            growImage(i, frame, fullwidth, scale, 1, 1, margin); 
            growImage(i, frame, fullwidth, scale, 1, -1, margin);   
            growImage(i, frame, fullwidth, scale, -1, 1, margin); 
            growImage(i, frame, fullwidth, scale, -1, -1, margin);   
        }
        margin = margin*2;
    }

    if (animationName == name) {
        if (frameNum < frames.length-1) {
            requestAnimationFrame(function() {animateFrame(frames, frameNum+1, name)});
        } else if (animationRepeat == true) {
            requestAnimationFrame(function() {animateFrame(frames, 0, name)});
        }
    }
}

function growImage(i, frame, fullwidth, scale, dirX, dirY, margin) {
    var comics = document.getElementsByClassName("comics");
    const polygons = frame['polygons'];
    var x = comics[i].offsetLeft;
    var y = comics[i].offsetTop;
    var w = comics[i].offsetWidth;
    const aspectRatio = comics[i].naturalHeight / comics[i].naturalWidth;
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
                comics[i].style.width = String(Math.round(w)) + "px";

                if(dirX < 0) {
                    x = x - step;
                    comics[i].style.left = String(x) + "px";
                }
                
                if(dirY < 0) {
                    y = y - step*aspectRatio;
                    comics[i].style.top = String(y) + "px";
                }

            }
        }
        step = step / 2;
    }
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

export function PickSubject() {
    let query = useQuery();

    const subjects = [
        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

        {'name': 'economics', 'comic': 'banana_prices.png'},
        {'name': 'computer-science', 'comic': 'pointers.png'},
        {'name': 'political-science', 'comic': 'election.png'},
        {'name': 'lingustics', 'comic': 'linguists.png'},
        {'name': 'psychology', 'comic': 'human_subjects.png'},
        {'name': 'astronomy', 'comic': 'supernova.png'},
        {'name': 'math', 'comic': 'purity.png'},

    ];

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
                    <button onClick={() => badApple()}>animate</button>
                </div>
                <div className="results" id="results">
                    <h2>{subjects.length} Results</h2>
                    <ul>{subjects.map(subject => 
                            <img className="comics" src={"https://imgs.xkcd.com/comics/" + subject.comic}></img>
                    )}</ul>

                    <div id="edges"></div>

                </div>
        </div>

        <footer>
            <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
            <p>Made with hate by Sam Low © 2024 Ubyssey</p>
        </footer>
    </div>
    );
}