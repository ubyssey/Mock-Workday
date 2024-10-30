import {Link} from "react-router-dom";
import { useState } from 'react';
export default function Nav() {
    const [joke, setJoke] = useState("Don't even try");
    function newText() {
        const jokes = [
            "Don't even try.",
            "Site hierarchy who???",
            "This doesn't work(day) btw",
            "We could just list the pages in the navigation but that wouldn't be CUTE!",
            "HEyyyy! Don't search me! My pages are hidden for a reason!",
            "Accident has no place in the construction of such a labyrinth.",
            "Nice try."
        ]
        setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }

    return (
        <nav className="nav">
            <div className="left">
                <a className="humour-link" href="https://ubyssey.ca/humour">
                <span><img src={'/dingbat.svg'} alt="Ubyssey dingbat logo"></img></span> Humour
                </a>
                {/*<button><ion-icon name="menu-outline"></ion-icon> MENU</button>*/}
                <Link className="home-link" to={"/"}>Home</Link>
            </div>
            <div className="why-tf-are-you-reading-this">
                <div className="searcharea">
                    <div className="searchdropdown">
                        <p id="searchJoke">{joke}</p>
                    </div>
                    <div className="dysfunctionalSearch">
                        <ion-icon name="search-outline"></ion-icon> <input onBlur={() => newText()} type="text" placeholder="Search"></input>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="hotphoto" src={"/lmao.jpg"} title="40x40 res photo of you taken two months before beginning 1st year 🔥🔥🔥"></img>
            </div>
        </nav>
    );
}