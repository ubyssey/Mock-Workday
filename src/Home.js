import {Link} from "react-router-dom";
import {funnyQuip, setQuipts, setPriorityQuipts} from "./AnnoyingMascot";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function Home() {
    setPriorityQuipts([
        "Welcome to 'It Doesn't WorkDay'!",
        "I am <b>Three Hundred Million Dollars</b>, the official mascot of 'Itdoesn'twork day'!",
        "Its time for you to do your course registration... so go do that!",
        "I'll be here keeping you company ;)"
    ]);
    var timelySuggestions = [
        "Get off UBC reddit.",
        "Try brushing your teeth every now and again.",
        "Its not too late to drop out!",
        "Read The Ubyssey!",
    ];

    const greetings = [
        "heyyy...",
        "wyd rn?",
        "so, what are we?",
        "hiiiiiiiiiiiiii <33",
        "we should hang sometime,,,",
        "Hey, you up?",
        "ur fascinating",
    ]

    const today = new Date();

    if(today.getMonth()+1>4 && today.getMonth()+1<9) {
        timelySuggestions.push("Enjoy summer while it lasts...");
    } else {
        if(today.getDay() !=0 && today.getDay() !=6) {
            if(today.getHours() > 8 && today.getHours() < 17) {
                timelySuggestions.push("Pay attention during class!");
            }
            if(today.getHours() > 16 && today.getHours() < 22) {
                timelySuggestions.push("Shouldn't you be studying?");
            }
        } else {
            timelySuggestions.push("Shouldn't you be studying?");
        }
    }
    if(today.getHours() > 21 || today.getHours() < 5) {
        timelySuggestions.push("Go to sleep!!!");
    }

    useEffect(() => {
        var rocket = document.getElementById("rocket");
        rocket.addEventListener("mouseover", () => {
            if (!rocket.classList.contains("explode")) {
                rocket.classList.add("explode");

        
                const state = Flip.getState(".rocket");
                setTimeout(() => {
                    document.getElementById("root").appendChild(rocket);
    
                    Flip.from(state, {
                        absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                        duration: 1, 
                        stagger: 0.1,
                        ease: "power1.inOut"
                        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
                    });    
                },300);

                setTimeout(()=> {
                    rocket.remove();
                }, 4400);
            }
        });
    }, []);

    function copyLink(e) {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            /* Resolved - text copied to clipboard successfully */
            var copyLinkName = document.getElementById("copy-link").innerHTML;
            document.getElementById("copy-link").innerHTML = "Copied to Clipboard";
            setTimeout( function() {
              document.getElementById("copy-link").innerHTML = copyLinkName;
          }, 1000);
        })
    }

    return (
        <div className="content-container">
            <div className="banner"></div>
            <div className="home">
                <div className="left">
                    <h1 className="only-desktop">{greetings[Math.floor(Math.random()*greetings.length)]}</h1>
                    <div className="home-section">
                        <h2>Awaiting Your Action</h2>
                        <p>Register for courses now. Thats what this is about!!!</p>
                    </div>
                    <div className="home-section">
                        <h2>Timely Suggestions</h2>
                        <p>{timelySuggestions[Math.floor(Math.random()*timelySuggestions.length)]}</p>
                    </div>
                </div>
                <div className="right">
                    <h1 className="only-mobile">{greetings[Math.floor(Math.random()*greetings.length)]}</h1>
                    <p className="date">Pretend it's Friday, June 14, 2024</p>
                    <div className="home-section">
                        <h2>Your Top Apps</h2>
                        <ul>
                            <li>
                                <Link to={"/vt0FtpYcOn1z9hxG7zw0fUcKYOul9nTQLqvxXgZvlqWgAQWs3E1nrgR2KPVgTCqzF86"}>
                                    <div className="app-icon">

                                    <svg id="rocket" className="rocket" width="447" height="1015" viewBox="0 0 447 1015" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fire fire-c" d="M221.086 747.394L183.445 656.048C181.493 651.311 174.689 650.912 172.042 655.298C161.367 672.983 137.108 709.361 96.9582 749.511C49.4276 797.042 105.275 949.714 124.184 996.943C126.21 1002 133.25 1001.76 135.057 996.619L221.199 751.671C221.688 750.28 221.648 748.757 221.086 747.394Z" fill="#CDDEF1"/>
                                        <path className="fire fire-c" d="M224.872 747.394L262.513 656.048C264.466 651.311 271.269 650.912 273.917 655.298C284.591 672.983 308.85 709.361 349 749.511C396.531 797.042 340.683 949.714 321.774 996.943C319.749 1002 312.708 1001.76 310.901 996.619L224.76 751.671C224.27 750.28 224.311 748.757 224.872 747.394Z" fill="#CDDEF1"/>
                                        <path className="fire fire-c" d="M225.329 595.05L316.595 884.44C316.695 884.757 316.631 885.104 316.423 885.364L223.027 1002.54C222.626 1003.04 221.861 1003.04 221.461 1002.54L129.876 887.112C129.668 886.85 129.605 886.502 129.707 886.184L223.423 595.045C223.541 594.68 223.683 594.569 223.759 594.517C223.881 594.434 224.095 594.35 224.378 594.351C224.661 594.352 224.874 594.437 224.996 594.52C225.072 594.573 225.213 594.684 225.329 595.05Z" fill="#8BABCE" stroke="white" stroke-width="14"/>
                                        <path className="fire fire-b" d="M220.496 706.494L183.887 654.273C181.648 651.078 176.955 650.763 174.182 653.507C164.159 663.426 139.609 685.523 97.9582 710.006C47.861 739.454 137.914 781.159 158.935 790.219C161.456 791.306 164.308 790.447 165.925 788.229L220.431 713.473C221.942 711.4 221.969 708.595 220.496 706.494Z" fill="#CDDEF1"/>
                                        <path className="fire fire-b" d="M226.462 706.494L263.071 654.273C265.31 651.078 270.003 650.763 272.776 653.507C282.799 663.426 307.349 685.523 349 710.006C399.097 739.454 309.044 781.159 288.023 790.219C285.502 791.306 282.65 790.447 281.033 788.229L226.527 713.473C225.016 711.4 224.99 708.595 226.462 706.494Z" fill="#CDDEF1"/>
                                        <path className="fire fire-b" d="M224.749 639.639L277.011 696.173C277.183 696.359 277.207 696.58 277.075 696.777L224.066 776.264C223.917 776.487 223.75 776.567 223.639 776.609C223.484 776.668 223.239 776.719 222.929 776.719C222.62 776.719 222.374 776.667 222.22 776.608C222.109 776.566 221.943 776.486 221.795 776.262L169.52 697.266C169.389 697.069 169.414 696.848 169.586 696.662L222.608 639.637C223.071 639.139 224.288 639.14 224.749 639.639Z" fill="#8BABCE" stroke="white" stroke-width="14"/>
                                        <path className="fire fire-a" d="M220.719 683.74L207.278 663.675C205.047 660.343 200.137 659.999 197.239 662.77C191.412 668.34 180.87 677.35 164.947 687.146C143.274 700.479 178.081 718.982 190.841 725.014C193.398 726.222 196.391 725.342 198.008 723.021L220.657 690.509C222.07 688.481 222.094 685.794 220.719 683.74Z" fill="#CDDEF1"/>
                                        <path className="fire fire-a" d="M225.281 683.74L238.722 663.675C240.953 660.343 245.863 659.999 248.761 662.77C254.588 668.34 265.13 677.35 281.053 687.146C302.726 700.479 267.919 718.982 255.159 725.014C252.602 726.222 249.609 725.342 247.992 723.021L225.343 690.509C223.93 688.481 223.906 685.794 225.281 683.74Z" fill="#CDDEF1"/>
                                        <path className="fire fire-a" d="M224.097 653.106L254.296 687.575C254.465 687.769 254.488 687.998 254.359 688.203L223.697 736.717C223.55 736.949 223.386 737.032 223.276 737.076C223.124 737.137 222.882 737.19 222.577 737.19C222.271 737.19 222.029 737.136 221.877 737.075C221.768 737.031 221.604 736.948 221.458 736.715L191.247 688.542C191.119 688.337 191.143 688.107 191.313 687.914L221.987 653.104C222.443 652.586 223.643 652.587 224.097 653.106Z" fill="#8BABCE" stroke="white" stroke-width="14"/>
                                        <path d="M305.04 577.279C303.395 571.773 298.33 568 292.584 568H157.416C151.67 568 146.605 571.773 144.96 577.279L114.958 677.707C113.946 681.096 119.693 683.842 121.843 681.034C141.401 655.487 179.82 614.5 225 614.5C270.18 614.5 308.599 655.487 328.157 681.034C330.307 683.842 336.054 681.096 335.042 677.707L305.04 577.279Z" fill="#8BABCE"/>
                                        <path d="M292.584 561H157.416C148.575 561 140.784 566.804 138.253 575.275L108.251 675.703C106.307 682.211 111.185 686.562 114.182 688.003C117.199 689.454 123.422 690.486 127.401 685.289C136.976 672.782 151.036 656.68 168.047 643.762C185.106 630.806 204.535 621.5 225 621.5C245.465 621.5 264.894 630.806 281.953 643.762C298.964 656.68 313.024 672.782 322.599 685.289C326.578 690.486 332.801 689.454 335.818 688.003C338.815 686.562 343.693 682.211 341.749 675.703L311.747 575.275C309.216 566.804 301.425 561 292.584 561Z" stroke="#285385" stroke-width="14"/>
                                        <path d="M195.5 526L175.192 546.308C167.003 554.497 172.803 568.5 184.385 568.5H265.615C277.197 568.5 282.997 554.497 274.808 546.308L254.5 526H225H195.5Z" fill="#CDDEF1"/>
                                        <path d="M286.5 183.5V413.218C286.5 418.673 282.078 423 276.623 423C269.246 423 264.437 430.808 267.581 437.481C271.775 446.385 276.335 456.655 279.928 466L385.216 456.107C391.895 455.48 397 449.872 397 443.164V406.5C397 389.812 350.5 364.5 332 316C313.5 267.5 292.833 208.5 286.5 183.5Z" fill="#8BABCE"/>
                                        <path d="M163.5 413.218V183.5C157.167 208.5 136.5 267.5 118 316C99.5 364.5 53 389.812 53 406.5V443.164C53 449.872 58.1047 455.48 64.7839 456.107L170.072 466C173.665 456.655 178.225 446.385 182.419 437.481C185.563 430.808 180.754 423 173.377 423C167.922 423 163.5 418.673 163.5 413.218Z" fill="#8BABCE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M225 19V526H254.5H273.5C280.68 526 286.5 520.182 286.5 513.002V490C286.5 484.917 283.766 475.986 279.928 466C276.335 456.655 271.775 446.385 267.581 437.481C264.437 430.808 269.246 423 276.623 423C282.078 423 286.5 418.673 286.5 413.218V183.5C286.5 148 249.5 40.5 225 19Z" fill="white"/>
                                        <path d="M225 19C200.5 40.5 163.5 148 163.5 183.5V413.218C163.5 418.673 167.922 423 173.377 423C180.754 423 185.563 430.808 182.419 437.481C178.225 446.385 173.665 456.655 170.072 466C166.233 475.986 163.5 484.917 163.5 490V513.002C163.5 520.182 169.32 526 176.5 526H195.5H225V19Z" fill="#CDDEF1"/>
                                        <path d="M156.507 182.592C150.05 207.604 129.77 265.502 111.46 313.505C102.74 336.365 87.3393 353.97 73.5198 368.324C71.6562 370.26 69.7923 372.165 67.9683 374.03C63.2055 378.898 58.7152 383.488 55.2175 387.61C52.7564 390.51 50.5292 393.467 48.8968 396.443C47.275 399.4 46 402.806 46 406.5V443.164C46 453.484 53.8531 462.111 64.129 463.077L160.416 472.124C159.741 474.138 159.133 476.085 158.61 477.935C157.407 482.192 156.5 486.457 156.5 490V513.002C156.5 524.049 165.456 533 176.5 533H178.6L170.243 541.358C157.643 553.957 166.567 575.5 184.385 575.5H265.615C283.433 575.5 292.357 553.957 279.757 541.358L271.399 533H273.5C284.544 533 293.5 524.049 293.5 513.002V490C293.5 486.457 292.593 482.192 291.39 477.935C290.867 476.085 290.259 474.138 289.584 472.124L385.871 463.077C396.147 462.111 404 453.484 404 443.164V406.5C404 402.806 402.725 399.4 401.103 396.443C399.471 393.467 397.244 390.51 394.782 387.61C391.285 383.488 386.794 378.898 382.032 374.03C380.208 372.165 378.344 370.26 376.48 368.324C362.661 353.97 347.26 336.365 338.54 313.505C320.23 265.502 299.95 207.604 293.493 182.592C293.346 172.863 290.886 159.184 287.127 144.146C283.21 128.477 277.745 110.81 271.519 93.6165C265.296 76.433 258.267 59.5958 251.19 45.6194C244.254 31.9186 236.843 20.0798 229.617 13.7386L225 9.68685L220.383 13.7386C213.157 20.0798 205.746 31.9186 198.809 45.6194C191.733 59.5958 184.703 76.433 178.481 93.6165C172.255 110.81 166.79 128.477 162.873 144.146C159.114 159.184 156.654 172.863 156.507 182.592Z" stroke="#285385" stroke-width="14"/>
                                        <path d="M262 169.5C262 172.162 261.728 173.568 261.527 174.247C260.755 174.196 259.602 173.979 257.906 173.49C256.121 172.976 254.112 172.274 251.702 171.427L251.504 171.357C249.207 170.55 246.618 169.64 243.881 168.797C238.249 167.064 231.639 165.5 224.5 165.5C217.361 165.5 210.751 167.064 205.119 168.797C202.382 169.64 199.793 170.55 197.496 171.357L197.298 171.427C194.888 172.274 192.879 172.976 191.094 173.49C189.398 173.979 188.244 174.196 187.473 174.247C187.272 173.568 187 172.162 187 169.5C187 148.789 203.789 132 224.5 132C245.211 132 262 148.789 262 169.5ZM262.166 174.241C262.166 174.241 262.163 174.242 262.156 174.243C262.162 174.241 262.166 174.241 262.166 174.241ZM186.834 174.241C186.834 174.241 186.838 174.241 186.844 174.243C186.837 174.242 186.834 174.241 186.834 174.241Z" fill="#CDDEF1" stroke="#285385" stroke-width="14"/>
                                    </svg>


                                    <div className="circle"></div>
                                    </div>
                                    <h3>Registration Appointments<br></br>Active and Upcoming</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/academics"}>
                                    <div className="app-icon">
                                        <svg className="grad" width="490" height="533" viewBox="0 0 490 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="253" cy="323" r="203" fill="#CDDEF1" stroke="#285385" stroke-width="14"/>
                                            <ellipse className="bags" cx="161" cy="331" rx="41" ry="14" fill="#285385"/>
                                            <ellipse className="bags" cx="344" cy="331" rx="41" ry="14" fill="#285385"/>
                                            <circle cx="161" cy="295" r="34" fill="white" stroke="#285385" stroke-width="14"/>
                                            <circle cx="344" cy="295" r="34" fill="white" stroke="#285385" stroke-width="14"/>
                                            <path d="M135 408H370.5" stroke="#285385" stroke-width="14" stroke-linecap="round"/>
                                            <path className="tear" d="M390 335.415C390 348.117 379.703 350 367 350C354.297 350 344 348.117 344 335.415C344 322.712 354.297 304 367 304C379.703 304 390 322.712 390 335.415Z" fill="#8BABCE"/>
                                            <path className="hat" d="M121.13 80.3677C117.431 79.6581 114 82.4933 114 86.2603V179.283C114 181.609 115.354 183.728 117.455 184.728C158.538 204.269 178.017 218 246.753 218L247.254 104.56L121.13 80.3677Z" fill="#CDDEF1"/>
                                            <path className="hat" d="M373.228 184.771C374.988 183.744 376 181.864 376 179.826V92.099C376 88.4286 372.734 85.6184 369.104 86.1663L247.254 104.56L246.753 218C311.941 218 361.294 191.732 373.228 184.771Z" fill="#8BABCE"/>
                                            <path className="hat" d="M368.06 79.2447L247.395 97.4595L122.449 73.493C114.433 71.9555 107 78.0984 107 86.2603V179.283C107 184.342 109.937 188.903 114.448 191.049C118.86 193.148 123.068 195.204 127.152 197.2C141.676 204.298 154.634 210.63 169.626 215.367C189.093 221.517 211.898 225 246.753 225C313.712 225 364.33 198.065 376.754 190.818C380.805 188.456 383 184.189 383 179.826V92.099C383 84.1464 375.923 78.0576 368.06 79.2447Z" stroke="#285385" stroke-width="14"/>
                                            <path className="hat" d="M14 36.8235V95.7065C14 99.2501 16.4399 102.189 19.585 102.434L245 120V54.8244L131 46.2941L14 36.8235Z" fill="#CDDEF1"/>
                                            <path className="hat" d="M470.415 102.434C473.56 102.189 476 99.2501 476 95.7065V36.8235L245 54.8244V120L470.415 102.434Z" fill="#8BABCE"/>
                                            <path className="hat" d="M245 54.8244L476 36.8235L245 15L14 36.8235L131 46.2941L245 54.8244Z" fill="white"/>
                                            <path className="hat" d="M244.456 126.979L245 127.021L245.544 126.979L470.959 109.413C478.408 108.833 483 102.203 483 95.7065V36.8235V30.4537L476.658 29.8546L245.658 8.03103L245 7.96883L244.342 8.03103L13.3416 29.8546L7 30.4537V36.8235V95.7065C7 102.203 11.5918 108.833 19.0412 109.413L244.456 126.979Z" stroke="#285385" stroke-width="14"/>
                                            <path className="hat" d="M47.5 166C38.5 178.5 22 206.134 22 217C22 230 67 231.5 67 217C67 205 51 175 47.5 166Z" fill="white"/>
                                            <path className="hat" d="M47.5 166L69.2428 43.2171C69.7314 40.4581 72.0644 38.4046 74.8631 38.2702L247.078 30M47.5 166C38.5 178.5 22 206.134 22 217C22 230 67 231.5 67 217C67 205 51 175 47.5 166Z" stroke="#285385" stroke-width="14" stroke-linecap="round"/>
                                        </svg>
                                        <div className="circle"></div>
                                    </div>
                                    <h3>Academics <span className="pointer">👈</span></h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/finances"}>
                                    <div className="app-icon">
                                        <div className="circle"></div>
                                    </div>
                                    <h3>Finances</h3>
                                </Link>
                            </li>
                            <li>
                                <a href="#" onClick={(e)=> copyLink(e)}>
                                    <div className="app-icon">
                                        <svg width="321" height="320" viewBox="0 0 321 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M260.379 179.872C260.379 179.872 320.129 120.122 260.379 60.3712C200.628 0.620649 140.878 60.3712 140.878 60.3712" stroke="#285385" stroke-width="28" stroke-linecap="round"/>
                                        <path d="M60.6212 140.628C60.6212 140.628 0.870677 200.378 60.6212 260.129C120.372 319.879 180.122 260.129 180.122 260.129" stroke="#285385" stroke-width="28" stroke-linecap="round"/>
                                        <path d="M200.628 120.829L121.079 200.378" stroke="#285385" stroke-width="28" stroke-linecap="round"/>
                                        </svg>
                                        <div className="circle"></div>
                                    </div>
                                    <h3 id="copy-link">Share with Friends</h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <img src={'/itdoesntwork.svg'}></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. Banner by <a href="https://ubyssey.ca/authors/ayla-cilliers/">Ayla Cilliers</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}