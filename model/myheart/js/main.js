import * as THREE from '../build/three.module.js';

import { DDSLoader } from './DDSLoader.js';
import { MTLLoader } from './MTLLoader.js';
import { OBJLoader } from './OBJLoader.js';
import { TrackballControls } from './TrackballControls.js';
	
const BASE_URL = './models/'
const appContainer = document.getElementById("heart-app");



function init(){
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );	
	camera.position.x= -42.54404597864378; camera.position.y= 4.095160583665006; camera.position.z= -1.2896749071128895;
	scene = new THREE.Scene();
	// let ambient = new THREE.AmbientLight( 0x404040);
	// scene.add(ambient);
	let directionalLight1 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight1.position.set( 0, 0, 1 ).normalize();
	let directionalLight2 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight2.position.set( 0, 0, -1 ).normalize();
	let directionalLight3 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight3.position.set( 1, 0, 0).normalize();
	let directionalLight4 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight4.position.set( -1, 0, 0 ).normalize();
	let directionalLight5 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight5.position.set( 0, 1, 0 ).normalize();
	let directionalLight6 = new THREE.DirectionalLight( 0xffeedd, 0.7 );
	directionalLight6.position.set( 0, -1, 0 ).normalize();
	scene.add( directionalLight1 );
	scene.add( directionalLight2 );
	scene.add( directionalLight3 );
	scene.add( directionalLight4 );			
	scene.add( directionalLight5 );
	scene.add( directionalLight6 );

	const onProgress = function (xhr) {
		if (xhr.lengthComputable) {
			const percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	const onError = function () { };



	const manager = new THREE.LoadingManager();
	manager.addHandler( /\.dds$/i, new DDSLoader() );

	new MTLLoader(manager)
		.setPath(BASE_URL)
		.load( 'openheartLD1.mtl', function (materials) {
			materials.preload();
			new OBJLoader(manager)
				.setMaterials(materials)
				.setPath(BASE_URL)
				.load( 'openheartLD1.obj', function (object) {
					object.position.x = 32;
					object.position.y = -3;
					object.position.z = 3;
					object.rotation.x = -1.6;
					object.name = 'openHeart';
					scene.add(object);
				}, onProgress, onError );
	});

	new MTLLoader(manager)
		.setPath(BASE_URL)
		.load( 'heartpartLD1.mtl', function (materials) {
			materials.preload();
			new OBJLoader(manager)
				.setMaterials(materials)
				.setPath(BASE_URL)
				.load( 'heartpartLD1.obj', function (object) {
					object.position.x= -7.600000000000003; object.position.y= -9.399999999999999; object.position.z= 24.199999999999946;
					object.rotation.x= -1.6000000000000008; object.rotation.y= 0.44999999999999996; object.rotation.z= 0.05000000000000002;
					object.scale.x= 3.949999999999994; object.scale.y= 3.949999999999994; object.scale.z= 3.949999999999994;
					object.name = 'heartPart';
					scene.add(object);
				}, onProgress, onError );
	});

	heartPart = scene.getObjectByName('heartPart', true);
	heartIsOpen = false;

	camera.position.z = 5;
	
}