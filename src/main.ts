import './style.css'
import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { Booster } from './components/Booster';
import { Ship } from './components/Ship';
import { Earth } from './components/Earth';
import { ScrollAnimator } from './components/ScrollAnimator';

let WIDTH: number;
let HEIGHT: number;
let aspectRatio: number;

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: TrackballControls;

init();
// Renderer
// render();
// Animation
animate();

function init(): void {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    aspectRatio = WIDTH / HEIGHT;

	// Add the renderer to the DOM
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0x000000);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Create the scene
    scene = new THREE.Scene();

	// helper
	const axesHelper = new THREE.AxesHelper( 5 );
	scene.add( axesHelper );

    // Create the camera
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(70, 20, 100);

	// ambient light
	const ambientLight = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
	directionalLight.position.set(10, 20, 15);
	scene.add(directionalLight);

    // Elements
	const booster = new Booster({ scene });
	const ship = new Ship({ scene });
	ship.mesh.position.set(0, 51.1, 0);

    const earth = new Earth(scene);

    const scrollAnimator = new ScrollAnimator(camera, booster, ship);

    // Handle window resize events
    window.addEventListener('resize', handleWindowResize, false);

    // Camera controls
    //controls = new TrackballControls(camera, renderer.domElement);
    //controls.rotateSpeed = 5.0;
    //controls.panSpeed = 1.0;
}

function handleWindowResize(): void {
    // Resize the renderer and update the camera aspect ratio
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    console.log('WIDTH=' + WIDTH + '; HEIGHT=' + HEIGHT);
    renderer.setSize(WIDTH, HEIGHT);
    aspectRatio = WIDTH / HEIGHT;
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();

    render();
}

function render(): void {
    // Render the 3D scene to the 2D screen
    renderer.render(scene, camera);
}

function animate(): void {
    // Draw the next frame
    // Max 60fps

    requestAnimationFrame(animate);
    
    //controls.update();
    
    render();
}
