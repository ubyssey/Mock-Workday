import {Link} from "react-router-dom";
import { setQuipts, setPriorityQuipts } from "./AnnoyingMascot";
import * as THREE from 'three'; 
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { useEffect } from "react";
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

export default function Hooray() {
    setPriorityQuipts([
        "YAYYYYY!",
    ]);
    setQuipts([
        "Have fun doing this next year!",
        "Congratulatons, Congratulatons, Congratulatons",
    ]);
    useEffect(() => {
        const scene = new THREE.Scene();
        const objects = [];
        scene.background = new THREE.Color( 0xffffff );
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
        const renderer = new CSS3DRenderer(); 
        renderer.setSize( window.innerWidth, window.innerHeight ); 
        //renderer.setAnimationLoop( animate ); 
        document.getElementById('implaying4dtimetable').innerHTML = "";
        document.getElementById('implaying4dtimetable').appendChild( renderer.domElement ); 
       // const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        //#c1c1c1
        //const material = new THREE.MeshBasicMaterial( { color: 0xe6ebed } ); 
        //const cube = new THREE.Mesh( geometry, material ); 
        //scene.add( cube ); 

        var surounding = [
            'wdcalendar.png',
            'wdcourses.png',
            'wdfuture.png',
            'wdmenu.png',
            'wdnodata.png',
            'wdtime.png',
            'wdworksheets.png',
            'wdwtf.png',
            'wdzeros.png',
        ];

        const surroundingDist = 3000;
        for (let i=0; i<surounding.length; i++) {
            var element = document.createElement( 'img' );
            element.className = 'surrounding';
            element.src = "/" + surounding[i];
            var objectCSS = new CSS3DObject( element );
            var angle = (i/surounding.length) * (2 * Math.PI);
            objectCSS.position.x = Math.cos(angle) * surroundingDist;
            objectCSS.position.z = Math.sin(angle) * surroundingDist;
            objectCSS.position.y =  1000;
            objectCSS.rotation.x = Math.PI/4;
            objectCSS.rotation.y = angle + (Math.PI/2);
            objectCSS.rotation.z = 0;
            objectCSS.type = "surrounding";
            scene.add( objectCSS );
            objects.push(objectCSS);   
        }

        var element = document.createElement( 'img' );
        element.className = 'dancing';
        element.src = "/Phenakistoscope.gif";
        var objectCSS = new CSS3DObject( element );
        objectCSS.position.x = 100;
        objectCSS.position.y =  0;
        objectCSS.position.z = -1500;
        objectCSS.rotation.x = 0;
        objectCSS.rotation.y = 0;
        objectCSS.rotation.z = 0;
        scene.add( objectCSS );
        objects.push(objectCSS);

        var element = document.createElement( 'img' );
        element.className = 'dingbat';
        element.src = "/dingbat.svg";
        var objectCSS = new CSS3DObject( element );
        objectCSS.position.x = 0;
        objectCSS.position.y =  -500;
        objectCSS.rotation.x = -(Math.PI/2);
        objectCSS.rotation.y = 0;
        objectCSS.rotation.z = 0;
        scene.add( objectCSS );
        objects.push(objectCSS);

        var element = document.createElement( 'img' );
        element.className = 'me';
        element.src = "/lmao.jpg";
        var objectCSS = new CSS3DObject( element );
        objectCSS.position.x = 1500;
        objectCSS.position.y =  700;
        objectCSS.position.z = 3000;
        objectCSS.rotation.x = 0.75;
        objectCSS.rotation.y = 0;
        objectCSS.rotation.z = 0;
        scene.add( objectCSS );
        objects.push(objectCSS);

        var element = document.createElement( 'div' );
        element.className = 'jerkday';
        element.textContent = "Jerkday?";
        var objectCSS = new CSS3DObject( element );
        objectCSS.position.x = -500;
        objectCSS.position.y =  500;
        objectCSS.position.z = -750;
        objectCSS.rotation.x = 0.5;
        objectCSS.rotation.y = 0;
        objectCSS.rotation.z = 0;
        scene.add( objectCSS );
        objects.push(objectCSS);


        var element = document.createElement( 'div' );
        element.className = 'workedtheday';
        element.innerHTML = '<svg viewBox="0 0 500 500"><path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" /><text width="500"><textPath href="#curve">You Worked the Day!</textPath></text></svg>';
        var objectCSS = new CSS3DObject( element );
        objectCSS.position.x = window.innerWidth * -0.5;
        objectCSS.position.y =  window.innerHeight * 0.5;
        objectCSS.position.z = -2500;
        objectCSS.rotation.x = 0;
        objectCSS.rotation.y = 0;
        objectCSS.rotation.z = 0;
        scene.add( objectCSS );
        objects.push(objectCSS);

        const courses = localStorage.getItem("courses").split(";");
        for (let i=0; i<courses.length; i++) {
            const element = document.createElement( 'div' );
            element.className = 'courseCard';
    
            const number = document.createElement( 'div' );
            number.className = 'number';
            number.textContent = courses[i];
            element.appendChild( number );
    
            const objectCSS = new CSS3DObject( element );
            objectCSS.position.x = -800 + (Math.random() * 1000);
            objectCSS.position.y =  0 + (Math.random() * 500);
            objectCSS.position.z = -450 + (Math.random() * 600);
            objectCSS.rotation.x = Math.PI * 2 * Math.random();
            objectCSS.rotation.y = Math.PI * 2 * Math.random();
            objectCSS.rotation.z = Math.PI * 2 * Math.random();
            objectCSS.type = "course-" + String(Math.random());
            scene.add( objectCSS );
            objects.push(objectCSS);
        }

        camera.position.z =1; 

        const controls = new TrackballControls( camera, renderer.domElement );
        controls.minDistance = 50;
        controls.maxDistance = 500;
        controls.addEventListener( 'change', render );

        render();
        wheeling();
        function wheeling() {
            const speed = 5;
            requestAnimationFrame(wheeling);
            for(let i=0; i<objects.length; i++) {
                if (objects[i].type.includes("course-")) {
                    var rotationMod = parseFloat(objects[i].type.replace("course-", ""));
                    var proximityModifier = 0;
                    var pull = [0,0,0];
                    for(let a=0; a<objects.length; a++) {
                        if (a!=i) {
                            const xDif = objects[a].position.x - objects[i].position.x;
                            const yDif = objects[a].position.y - objects[i].position.y;
                            const zDif = objects[a].position.z - objects[i].position.z;
                            const difSquared = (xDif * xDif) + (yDif*yDif) + (zDif*zDif);
                            pull[0] += xDif/difSquared;
                            pull[1] += yDif/difSquared;
                            pull[2] += zDif/difSquared;
                            proximityModifier += 1/difSquared;
                        }
                    }
                    objects[i].position.x += pull[0];
                    objects[i].position.y += pull[1];
                    objects[i].position.z += pull[2];
                    objects[i].rotation.x += 5 * rotationMod * speed * proximityModifier;
                    objects[i].rotation.y += 3 * speed * proximityModifier;
                    objects[i].rotation.z += 2 * speed * proximityModifier;
                }

                if (objects[i].type == "surrounding") {
                    var angle = objects[i].rotation.y - (Math.PI/2) + (Math.PI*0.001);
                    objects[i].position.x = Math.cos(angle) * surroundingDist;
                    objects[i].position.z = Math.sin(angle) * surroundingDist;
                    objects[i].rotation.y = angle + (Math.PI/2);
                }
            }
            controls.update();
            renderer.render( scene, camera ); 
        }
        function render() {
            renderer.render( scene, camera );
        }

        


        const sceneConfetti = new THREE.Scene();
        const objectsConfetti = [];
        scene.background = new THREE.Color( 0xffffff );
        const cameraConfetti = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
        const rendererConfetti = new CSS3DRenderer(); 
        rendererConfetti.setSize( window.innerWidth, window.innerHeight ); 
        //renderer.setAnimationLoop( animate ); 
        document.getElementById('confettitwall').appendChild( rendererConfetti.domElement ); 
       // const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        //#c1c1c1
        //const material = new THREE.MeshBasicMaterial( { color: 0xe6ebed } ); 
        //const cube = new THREE.Mesh( geometry, material ); 
        //scene.add( cube ); 
        for (let i=0; i<500; i++) {
            const element = document.createElement( 'div' );

            var colour = Math.floor(Math.random() * 3);
            element.className = 'confetti ' + ['blue', 'gold', 'white'][colour];
        
            const objectCSS = new CSS3DObject( element );
            objectCSS.position.x = -0.5 * window.innerWidth + (Math.random() * window.innerWidth);
            objectCSS.position.y =  0 + (Math.random() * 500);
            objectCSS.position.z = -450 + (Math.random() * 100);
            objectCSS.rotation.x = Math.PI * 2 * Math.random();
            objectCSS.rotation.y = Math.PI * 2 * Math.random();
            objectCSS.rotation.z = Math.PI * 2 * Math.random();
            objectCSS.type = String(Math.random());
            sceneConfetti.add( objectCSS );
            objectsConfetti.push(objectCSS);
        }

        cameraConfetti.position.z = 5; 

        renderConfetti();
        wheelingConfetti();
        function wheelingConfetti() {
            const speed = 1;
            requestAnimationFrame(wheelingConfetti);
            for(let i=0; i<objectsConfetti.length; i++) {
                objectsConfetti[i].rotation.x += 5 * parseFloat(objectsConfetti[i].type) * speed;
                objectsConfetti[i].rotation.y += 3 * speed;
                objectsConfetti[i].rotation.z += 2 * speed;
                objectsConfetti[i].position.y -= 10 * speed;

                if (objectsConfetti[i].position.y < -0.35 * window.innerHeight + 64) {
                    objectsConfetti.splice(i,1);
                }
            }
            rendererConfetti.render( sceneConfetti, cameraConfetti ); 
        }
        function renderConfetti() {
            rendererConfetti.render( sceneConfetti, cameraConfetti );
        }
    }, []);
    return (
        <div className="content-container hooray">
            <div id="confettitwall"></div>
            <div>
            <div className="pageheader finalheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> On the fifth day of the fourth month, the sky opened up and I saw visions of God.</h1>
            </div>

            <div className="section-container">

                <div className="timetable">
                    <div id="implaying4dtimetable" className="ezekiel"></div>
                    <p>Share among your internet prisons!</p>

                    <p><a href="https://ubyssey.ca/"><i><b>The Ubyssey</b> "Our website actually works" since 1918</i></a></p>
                </div>

            </div>

            </div>
            <footer>
                <img src={'/itdoesntwork.svg'} alt="It doesn't work day"></img>
                <p>Made with hate by <a href="https://ubyssey.ca/authors/samlow/">Sam Low</a> and <a href="https://ubyssey.ca/humour">Ubyssey Humour Contributors</a>. <span className="nowrap">© 2024 Ubyssey</span></p>
            </footer>
        </div>
    );
}