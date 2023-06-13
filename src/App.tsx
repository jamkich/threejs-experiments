import { useEffect } from 'react';
import './App.css';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

function App() {
  useEffect(() => {
    // Scene Section
    const scene = new THREE.Scene();

    // Camera Section
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    // Renderer Section
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({ color: '#32a866' });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    scene.add(line);

    renderer.render(scene, camera);
  }, []);

  return <h1> jamkich's three js experiments</h1>;
}
export default App;
