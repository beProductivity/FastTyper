import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const RotatingSquareCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Set the background color

    // Add an ambient light with higher intensity to remove shading
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Add directional light for additional illumination
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);

    // Calculate the aspect ratio of the canvas based on the window size
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    // Adjust the camera to match the aspect ratio
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    // Load your 3D model
    const loader = new GLTFLoader();
    loader.load('/mechanical_keyboard.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Get the bounding box of the model to center it
      const boundingBox = new THREE.Box3().setFromObject(model);
      const center = boundingBox.getCenter(new THREE.Vector3());

      // Move the model to the center of the scene
      model.position.sub(center);

      // Set up rotation controls for the loaded model
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false; // Disable zooming
      controls.enablePan = false; // Disable panning
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: null, // Disable right mouse button movement
      };
      controls.rotateSpeed = 0.2;
      controls.target.set(0, 0, 0);
      controls.update();
    });

    // Position the camera to view the centered model
    camera.position.set(0, 0, 300);

    // Handle window resize to update aspect ratio and canvas size
    const handleWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newAspectRatio = newWidth / newHeight;

      camera.aspect = newAspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up function
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingSquareCanvas;
