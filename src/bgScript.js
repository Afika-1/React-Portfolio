import * as THREE from 'three'
import './App.css'
import './assets/background1.jpg'


const container = document.querySelector('.bg_three');
const loader = new THREE.TextureLoader();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const geometry = THREE.PlaneGeometry();
const material= new THREE.MeshBasicMaterial({
    color: 0xff0000,
    map: loader.load(bg1),
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z=5;

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();