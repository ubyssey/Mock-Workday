import {Link} from "react-router-dom";
import { setQuipts } from "./AnnoyingMascot";
import * as THREE from 'three'; 
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { useEffect } from "react";
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

export default function Hooray() {
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
        const courses = localStorage.getItem("courses").split(",");
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
            objectCSS.position.z = -450 + (Math.random() * 100);
            objectCSS.rotation.x = Math.PI * 2 * Math.random();
            objectCSS.rotation.y = Math.PI * 2 * Math.random();
            objectCSS.rotation.z = Math.PI * 2 * Math.random();
            objectCSS.type = String(Math.random());
            scene.add( objectCSS );
            objects.push(objectCSS);
        }

        camera.position.z = 5; 

        const controls = new TrackballControls( camera, renderer.domElement );
        controls.minDistance = 500;
        controls.maxDistance = 6000;
        controls.addEventListener( 'change', render );

        render();
        wheeling();
        function wheeling() {
            const speed = 5;
            requestAnimationFrame(wheeling);
            for(let i=0; i<objects.length; i++) {
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
                objects[i].rotation.x += 5 * parseFloat(objects[i].type) * speed * proximityModifier;
                objects[i].rotation.y += 3 * speed * proximityModifier;
                objects[i].rotation.z += 2 * speed * proximityModifier;
            }
            controls.update();
            renderer.render( scene, camera ); 
        }
        function render() {
            renderer.render( scene, camera );
        }
    }, []);
    return (
        <div className="content-container">
            <div>
            <div className="pageheader">
                <h1><Link to={"/"}><ion-icon name="arrow-back-outline"></ion-icon></Link> On the fifth day of the fourth month, the sky opened up and I saw visions of God.</h1>
            </div>

            <div className="section-container">

                <div className="timetable">
                    <svg viewBox="0 0 500 500">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                        <text width="500">
                        <textPath href="#curve">
                            You Worked the Day!
                        </textPath>
                        </text>
                    </svg>
                    
                    <div id="implaying4dtimetable" className="ezekiel"></div>
                </div>

            </div>

            </div>
            <footer>
                <img src="https://wd10.myworkday.com/wday/asset/pex/images/workday-logo.svg"></img>
                <p>Made by Sam Low © 2024 Ubyssey</p>
            </footer>
        </div>
    );
}