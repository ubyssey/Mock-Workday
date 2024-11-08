import React, { useEffect } from "react";

var quips = [];
var destination = {};
var quipping = false;

var priorityQuips = [];

var backupQuips = [
    "Imagine a spreadsheet with loading animations!",
    "Client-side rendered means good right?",
    "Abstract, bundle, generalize, be nothing and everything at the same time!",
    "wwWait! Am I on a WEBSITE????!!! 🤮",
    "I'm Sorry 🥺",
    "Next time we'll just use an Instagram story for course registration",
    "Your AI (Annoyingly Inescapable) Assistant! ✨",
    "BUT IM SO SMOOTH! SO ROUND!",
    "Blame the database guy!",
    "Hiding the complexity so that you can have the fun of finding it again!"
];

export default function AnnoyingMascot() {
    useEffect(() => iterateQuips(), []);
    return (
        <div id="mascot" className="mascot">
            <div id="speechBubble" className="speechBubble">
            </div>
            <img src={"/cheque-mascot.svg"}></img>
        </div>
    );
}

function moveAround() {
    const mascot = document.getElementById("mascot");
    destination = {
        'scale': Math.floor(Math.random()*100) + 250,
        'left': Math.floor(Math.random() * (window.screen.width - (2*mascot.offsetWidth))),
        'bottom': Math.floor(Math.random() * (window.screen.height - mascot.offsetHeight)),
    };
    const position = {
        'scale': parseInt(getComputedStyle(mascot).getPropertyValue("--scale").replace("px", "")),
        'left': mascot.offsetLeft,
        'bottom': parseInt(getComputedStyle(mascot).getPropertyValue("bottom").replace("px", "")),
    };

    const scaleDelta = destination.scale - position.scale;
    const leftDelta = destination.left - position.left;
    const bottomDelta = destination.bottom - position.bottom;
    console.log(position);
    console.log(destination);
    const delta = Math.sqrt(Math.pow(scaleDelta, 2) + Math.pow(leftDelta, 2) + Math.pow(bottomDelta, 2));
    console.log(delta);
    const dist = 100;
    const newScale = Math.min(dist/delta, 1) * scaleDelta;
    const newLeft = Math.min(dist/delta, 1) * leftDelta;
    const newBottom = Math.min(dist/delta, 1) * bottomDelta;
    console.log(newBottom);
    mascot.style.setProperty("--scale", String(position.scale + newScale) + "px");
    mascot.style.left = String(position.left + newLeft) + "px";
    mascot.style.bottom = String(position.bottom + newBottom) + "px";
}

function iterateQuips() {
    if (quipping === false) {
        if (priorityQuips.length > 0) {
            funnyQuip(priorityQuips[0], 1);
            priorityQuips.splice(0, 1);
        } else if (quips.length > 0) {
            setTimeout(() => {
                const quipIndex = Math.floor(Math.random() * quips.length);
                funnyQuip(quips[quipIndex], 1);
                quips.splice(quipIndex, 1);
            }, 5000);
        } else if (backupQuips.length > 0) {
            setTimeout(() => {
                const quipIndex = Math.floor(Math.random() * backupQuips.length);
                funnyQuip(backupQuips[quipIndex], 1);
                backupQuips.splice(quipIndex, 1);
            }, 15000);
        } else {
            setTimeout(iterateQuips, 1000);
        }
    }
    //moveAround();
}

export function setQuipts(newQuips) {
    quips = newQuips;
}

export function setPriorityQuipts(newQuips) {
    priorityQuips = newQuips;
}


export function funnyQuip(quip, l) {
    quipping = true;
    setTimeout(() => {
        document.getElementById("mascot").classList.add("speaking");
        document.getElementById("speechBubble").innerHTML = quip.slice(0,l);
        l = l + 1;
        if (l <= quip.length) {
            funnyQuip(quip, l);
        } else {
            setTimeout(() => {
                if (quipping === true) {
                    document.getElementById("speechBubble").innerHTML = "";
                    document.getElementById("mascot").classList.remove("speaking");
                    const timeout = 500;
                    quipping = false;
                    setTimeout(iterateQuips, timeout);
                }
            }, 3000)
        }
    }, 40);
}