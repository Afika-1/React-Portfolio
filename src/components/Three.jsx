// import React from 'react'
// import * as THREE from 'three'
// import '../App.css'
// import  background from '../assets/smoke.webp'
// function Background() {


//     const container = document.querySelector('.newBg');
//     const loader = new THREE.TextureLoader();
    
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(70,
//         window.innerWidth / window.innerHeight,
//         0.1, 1000);
//     const renderer = new THREE.WebGL1Renderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     container.appendChild(renderer.domElement);
    
//     const geometry = new THREE.PlaneGeometry(14, 8, 15, 9);
//     const material = new THREE.MeshBasicMaterial({
        
//         map: loader.load(background),
//         opacity: 0.2, 
//         transparent: true, 
//         // color: 0x00ff00,
    
        
//     });
    
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);
//     camera.position.z = 5;
    
//     const count = geometry.attributes.position.count;
//     const clock = new THREE.Clock()
    
//     function animate() {
//         const time = clock.getElapsedTime();
//         for (let i = 0; i < count; i++) {
//             const x = geometry.attributes.position.getX(i);
//             const y = geometry.attributes.position.getY(i);
    
//             const anim1 = 0.25 * Math.sin(x + time * 0.7);
//             const anim2 = 0.35 * Math.sin(x * 1 + time * 0.7);
//             const anim3 = 0.1 * Math.sin(y * 15 + time * 1);
    
//             geometry.attributes.position.setZ(i, anim1 + anim2+ anim3);
//             geometry.computeVertexNormals();
//             geometry.attributes.position.needsUpdate = true;
//         }
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//     }
    
//     animate();


    
        


// }

// export default Background