import {Link, Outlet, useLocation} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import React from "react";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
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
        {'name': 'math', 'comic': 'purity.png'}
    ]

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
                </div>
                <div className="results">
                    <h2>{subjects.length} Results</h2>
                    <ul>{subjects.map(subject => 
                            <img src={"https://imgs.xkcd.com/comics/" + subject.comic}></img>
                    )}</ul>

                </div>
        </div>

        <footer>
            <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
            <p>Made with hate by Sam Low © 2024 Ubyssey</p>
        </footer>
    </div>
    );
}