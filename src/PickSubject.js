import {Link, Outlet, useLocation} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import React from "react";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function animateSubjects() {

    const idk = {
        "width": 1444,
        "height": 1080,
        "polygons": [
            {
                "origin": [
                    903,
                    821
                ],
                "edges": [
                    [
                        1129,
                        821
                    ],
                    [
                        753,
                        1079
                    ],
                    [
                        844,
                        718
                    ]
                ]
            },
            {
                "origin": [
                    1127,
                    219
                ],
                "edges": [
                    [
                        1131,
                        219
                    ],
                    [
                        916,
                        583
                    ],
                    [
                        1088,
                        152
                    ]
                ]
            },
            {
                "origin": [
                    1047,
                    841
                ],
                "edges": [
                    [
                        1133,
                        841
                    ],
                    [
                        909,
                        1079
                    ],
                    [
                        913,
                        609
                    ]
                ]
            },
            {
                "origin": [
                    692,
                    957
                ],
                "edges": [
                    [
                        1165,
                        957
                    ],
                    [
                        621,
                        1079
                    ],
                    [
                        600,
                        799
                    ]
                ]
            },
            {
                "origin": [
                    577,
                    936
                ],
                "edges": [
                    [
                        1215,
                        936
                    ],
                    [
                        494,
                        1079
                    ],
                    [
                        436,
                        692
                    ]
                ]
            },
            {
                "origin": [
                    1142,
                    1041
                ],
                "edges": [
                    [
                        1180,
                        1041
                    ],
                    [
                        1119,
                        1079
                    ],
                    [
                        900,
                        622
                    ]
                ]
            },
            {
                "origin": [
                    906,
                    733
                ],
                "edges": [
                    [
                        1121,
                        733
                    ],
                    [
                        706,
                        1079
                    ],
                    [
                        832,
                        605
                    ]
                ]
            },
            {
                "origin": [
                    793,
                    993
                ],
                "edges": [
                    [
                        1161,
                        993
                    ],
                    [
                        743,
                        1079
                    ],
                    [
                        698,
                        829
                    ]
                ]
            },
            {
                "origin": [
                    951,
                    202
                ],
                "edges": [
                    [
                        1125,
                        202
                    ],
                    [
                        787,
                        486
                    ],
                    [
                        881,
                        80
                    ]
                ]
            },
            {
                "origin": [
                    980,
                    903
                ],
                "edges": [
                    [
                        1145,
                        903
                    ],
                    [
                        878,
                        1079
                    ],
                    [
                        853,
                        683
                    ]
                ]
            },
            {
                "origin": [
                    800,
                    256
                ],
                "edges": [
                    [
                        1138,
                        256
                    ],
                    [
                        716,
                        401
                    ],
                    [
                        777,
                        217
                    ]
                ]
            },
            {
                "origin": [
                    968,
                    273
                ],
                "edges": [
                    [
                        1147,
                        273
                    ],
                    [
                        813,
                        541
                    ],
                    [
                        857,
                        82
                    ]
                ]
            },
            {
                "origin": [
                    1095,
                    298
                ],
                "edges": [
                    [
                        1158,
                        298
                    ],
                    [
                        923,
                        595
                    ],
                    [
                        998,
                        130
                    ]
                ]
            },
            {
                "origin": [
                    629,
                    847
                ],
                "edges": [
                    [
                        1134,
                        847
                    ],
                    [
                        494,
                        1079
                    ],
                    [
                        601,
                        799
                    ]
                ]
            },
            {
                "origin": [
                    806,
                    206
                ],
                "edges": [
                    [
                        1127,
                        206
                    ],
                    [
                        706,
                        378
                    ],
                    [
                        802,
                        199
                    ]
                ]
            },
            {
                "origin": [
                    553,
                    739
                ],
                "edges": [
                    [
                        555,
                        739
                    ],
                    [
                        476,
                        872
                    ],
                    [
                        517,
                        677
                    ]
                ]
            },
            {
                "origin": [
                    1071,
                    557
                ],
                "edges": [
                    [
                        1193,
                        557
                    ],
                    [
                        769,
                        1079
                    ],
                    [
                        815,
                        114
                    ]
                ]
            },
            {
                "origin": [
                    991,
                    673
                ],
                "edges": [
                    [
                        1119,
                        673
                    ],
                    [
                        756,
                        1079
                    ],
                    [
                        746,
                        249
                    ]
                ]
            },
            {
                "origin": [
                    442,
                    769
                ],
                "edges": [
                    [
                        554,
                        769
                    ],
                    [
                        408,
                        827
                    ],
                    [
                        406,
                        706
                    ]
                ]
            },
            {
                "origin": [
                    569,
                    825
                ],
                "edges": [
                    [
                        688,
                        825
                    ],
                    [
                        506,
                        934
                    ],
                    [
                        484,
                        678
                    ]
                ]
            },
            {
                "origin": [
                    451,
                    756
                ],
                "edges": [
                    [
                        556,
                        756
                    ],
                    [
                        408,
                        829
                    ],
                    [
                        418,
                        698
                    ]
                ]
            },
            {
                "origin": [
                    806,
                    353
                ],
                "edges": [
                    [
                        1173,
                        353
                    ],
                    [
                        753,
                        444
                    ],
                    [
                        746,
                        249
                    ]
                ]
            },
            {
                "origin": [
                    1030,
                    866
                ],
                "edges": [
                    [
                        1138,
                        866
                    ],
                    [
                        906,
                        1079
                    ],
                    [
                        713,
                        317
                    ]
                ]
            },
            {
                "origin": [
                    537,
                    983
                ],
                "edges": [
                    [
                        1161,
                        983
                    ],
                    [
                        481,
                        1079
                    ],
                    [
                        506,
                        929
                    ]
                ]
            },
            {
                "origin": [
                    846,
                    638
                ],
                "edges": [
                    [
                        1192,
                        638
                    ],
                    [
                        841,
                        645
                    ],
                    [
                        838,
                        624
                    ]
                ]
            },
            {
                "origin": [
                    876,
                    166
                ],
                "edges": [
                    [
                        1100,
                        166
                    ],
                    [
                        731,
                        417
                    ],
                    [
                        832,
                        90
                    ]
                ]
            },
            {
                "origin": [
                    1119,
                    205
                ],
                "edges": [
                    [
                        1126,
                        205
                    ],
                    [
                        909,
                        568
                    ],
                    [
                        1088,
                        152
                    ]
                ]
            },
            {
                "origin": [
                    956,
                    743
                ],
                "edges": [
                    [
                        1125,
                        743
                    ],
                    [
                        761,
                        1079
                    ],
                    [
                        712,
                        321
                    ]
                ]
            },
            {
                "origin": [
                    1194,
                    573
                ],
                "edges": [
                    [
                        1194,
                        573
                    ],
                    [
                        1145,
                        657
                    ],
                    [
                        920,
                        99
                    ]
                ]
            },
            {
                "origin": [
                    466,
                    865
                ],
                "edges": [
                    [
                        1138,
                        865
                    ],
                    [
                        463,
                        869
                    ],
                    [
                        392,
                        737
                    ]
                ]
            },
            {
                "origin": [
                    1217,
                    937
                ],
                "edges": [
                    [
                        1218,
                        937
                    ],
                    [
                        1212,
                        944
                    ],
                    [
                        1217,
                        937
                    ]
                ]
            },
            {
                "origin": [
                    987,
                    325
                ],
                "edges": [
                    [
                        1167,
                        325
                    ],
                    [
                        834,
                        590
                    ],
                    [
                        848,
                        85
                    ]
                ]
            },
            {
                "origin": [
                    908,
                    104
                ],
                "edges": [
                    [
                        926,
                        104
                    ],
                    [
                        725,
                        420
                    ],
                    [
                        897,
                        85
                    ]
                ]
            },
            {
                "origin": [
                    1037,
                    459
                ],
                "edges": [
                    [
                        1189,
                        459
                    ],
                    [
                        678,
                        1079
                    ],
                    [
                        826,
                        94
                    ]
                ]
            },
            {
                "origin": [
                    894,
                    1043
                ],
                "edges": [
                    [
                        1181,
                        1043
                    ],
                    [
                        873,
                        1079
                    ],
                    [
                        762,
                        815
                    ]
                ]
            },
            {
                "origin": [
                    955,
                    425
                ],
                "edges": [
                    [
                        1186,
                        425
                    ],
                    [
                        838,
                        627
                    ],
                    [
                        818,
                        189
                    ]
                ]
            },
            {
                "origin": [
                    978,
                    263
                ],
                "edges": [
                    [
                        1141,
                        263
                    ],
                    [
                        816,
                        543
                    ],
                    [
                        870,
                        77
                    ]
                ]
            },
            {
                "origin": [
                    713,
                    877
                ],
                "edges": [
                    [
                        1138,
                        877
                    ],
                    [
                        596,
                        1079
                    ],
                    [
                        682,
                        824
                    ]
                ]
            },
            {
                "origin": [
                    786,
                    211
                ],
                "edges": [
                    [
                        1128,
                        211
                    ],
                    [
                        710,
                        342
                    ],
                    [
                        785,
                        210
                    ]
                ]
            },
            {
                "origin": [
                    799,
                    1051
                ],
                "edges": [
                    [
                        809,
                        1051
                    ],
                    [
                        782,
                        1079
                    ],
                    [
                        663,
                        817
                    ]
                ]
            },
            {
                "origin": [
                    1006,
                    980
                ],
                "edges": [
                    [
                        1161,
                        980
                    ],
                    [
                        948,
                        1079
                    ],
                    [
                        848,
                        707
                    ]
                ]
            },
            {
                "origin": [
                    1073,
                    225
                ],
                "edges": [
                    [
                        1132,
                        225
                    ],
                    [
                        837,
                        633
                    ],
                    [
                        1016,
                        126
                    ]
                ]
            }
        ]
    };

    var comics = document.getElementsByClassName("comics");

    for (let i=0; i<comics.length; i++) {
        comics[i].style.display = "none";
    }

    var fullwidth = document.getElementById("results").offsetWidth;
    var scale = 1;
    if (idk["height"] > document.getElementById("results").offsetHeight) {
        scale = document.getElementById("results").offsetHeight/idk["height"];
    } else {
        scale = fullwidth/idk["width"];
    }

    const polygons = idk['polygons'];

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
        comics[i].style.left = String(Math.floor(x)) + "px";
        comics[i].style.top = String(Math.round(y)) + "px";
        comics[i].style.width = "0px";
    }

    var margin = 1;
    while (margin < fullwidth) {
        for (var i in polygons) {
            growImage(i, idk, fullwidth, scale, 1, 1, margin); 
            growImage(i, idk, fullwidth, scale, 1, -1, margin);   
            growImage(i, idk, fullwidth, scale, -1, 1, margin); 
            growImage(i, idk, fullwidth, scale, -1, -1, margin);   
        }
        margin = margin*2;
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
                    <button onClick={() => animateSubjects()}>animate</button>
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