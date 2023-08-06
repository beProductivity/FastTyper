import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface RotatingSquareCanvasParams {
  widthPercent: number;
  heightPercent: number;
}

const RotatingSquareCanvas = ({ widthPercent, heightPercent }: RotatingSquareCanvasParams) => {
  const canvasRef = useRef();
  const modelRef = useRef();
  const previousMouseXRef = useRef(0); // Store the previous mouseX position
  const rotationSpeedRef = useRef(0); // Store the rotation speed

  // Scene settings
  const sceneColor = 0xf0f0f0; // Background color of the scene

  // Lighting settings
  const ambientLightColor = 0xffffff; // Ambient light color
  const ambientLightIntensity = 1; // Ambient light intensity
  const directionalLightColor = 0xffffff; // Directional light color
  const directionalLightIntensity = 1; // Directional light intensity
  const directionalLightPosition = new THREE.Vector3(1, 2, 3); // Directional light position

  // Model rotation settings
  const initialRotationZValue = Math.PI * 0.05;
  const initialRotationXValue = -Math.PI * 0.1;
  const modelRotationRange = 0.2; // Set the rotation range for the model

  // Camera settings
  const cameraPositionSmallCanvas = new THREE.Vector3(0, 0, 350);
  const cameraPositionLargeCanvas = new THREE.Vector3(0, 0, 250);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneColor); // Set the background color

    // Add an ambient light with higher intensity to remove shading
    const ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity);
    scene.add(ambientLight);

    // Add directional light for additional illumination
    const directionalLight = new THREE.DirectionalLight(directionalLightColor, directionalLightIntensity);
    directionalLight.position.copy(directionalLightPosition);
    scene.add(directionalLight);

    // Calculate the aspect ratio of the canvas based on the percentage size
    const width = (widthPercent / 100) * window.innerWidth;
    const height = (heightPercent / 100) * window.innerHeight;
    const aspectRatio = width / height;

    // Adjust the camera to match the aspect ratio
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    // Load your 3D model
    const loader = new GLTFLoader();
    loader.load('/mechanical_keyboard.glb', (gltf) => {
      const model = gltf.scene;
      modelRef.current = model; // Store the model reference for mouse rotation

      scene.add(model);

      // Get the bounding box of the model to center it
      const boundingBox = new THREE.Box3().setFromObject(model);
      const center = boundingBox.getCenter(new THREE.Vector3());

      // Move the model to the center of the scene
      model.position.sub(center);

      // Rotate model at initialization
      model.rotation.set(initialRotationXValue, model.rotation.y, initialRotationZValue);

      // Set up rotation controls for the loaded model
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false; // Disable zooming
      controls.enablePan = false; // Disable panning
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE, // Allow left mouse button rotation
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: null, // Disable right mouse button movement
      };
      controls.enableRotate = true; // Enable rotation
      controls.enableRotate = true;
      controls.rotateSpeed = 0.005;
      controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation (up and down)
      controls.target.set(0, 0, 0);
      controls.update();
    });

    // Position the camera based on canvas width
    const handleCameraPosition = () => {
      if (canvasRef.current) {
        const canvasWidth = canvasRef.current.width;
        if (canvasWidth < 768) {
          camera.position.copy(cameraPositionSmallCanvas); // Set camera position for smaller canvas width
        } else {
          camera.position.copy(cameraPositionLargeCanvas); // Set camera position for larger canvas width
        }
      }
    };

    // Call the function to set the initial camera position
    handleCameraPosition();

    // Handle window resize to update aspect ratio and canvas size
    const handleWindowResize = () => {
      const newWidth = (widthPercent / 100) * window.innerWidth;
      const newHeight = (heightPercent / 100) * window.innerHeight;
      const newAspectRatio = newWidth / newHeight;

      camera.aspect = newAspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);

      // Update the camera position based on the new canvas width
      handleCameraPosition();
    };

    window.addEventListener('resize', handleWindowResize);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the rotation based on the previous and current mouse position
      if (modelRef.current) {
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        const mouseX = previousMouseXRef.current - canvasBounds.left;
        const canvasHalfWidth = canvasBounds.width / 2;

        // Calculate the normalized mouse position between -1 and 1
        const normalizedMouseX = (mouseX / canvasHalfWidth) * 2 - 1;

        // Update the rotation speed based on the normalized mouse position
        rotationSpeedRef.current = 0.001 * normalizedMouseX;

        // Apply the rotation speed
        modelRef.current.rotation.y += rotationSpeedRef.current;

        // Clamp the rotation angle within the specified range
        modelRef.current.rotation.y = THREE.MathUtils.clamp(
          modelRef.current.rotation.y,
          -modelRotationRange,
          modelRotationRange
        );
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up function
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      renderer.dispose();
    };
  }, [widthPercent, heightPercent]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      previousMouseXRef.current = event.clientX;
    };

    // Add the mousemove event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingSquareCanvas;
