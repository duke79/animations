import { Canvas, useFrame } from 'react-three-fiber';
import './App.css';
import Sphere from './modules/sphere/Sphere';
import HoverCar from './modules/hover-car/HoverCar';
import { OrbitControls } from '@react-three/drei';
import RaceTrack from './modules/race-track/RaceTrack';
import { useRef, useState } from 'react';
import ParticleSystem from './modules/particle-system/ParticleSystem';

function App() {
  const canvasRef: any = useRef();
  const [hyperParams, setHyperParams] = useState({
    GRAVITY: 0.00000000001,
    BASE_MASS: 1.99,
    MASS_RANGE: 0.2,
    POSITION_RANGE: 5,
  });

  const renderHyperParamsControls = () => {
    const newHyperParams = { ...hyperParams };
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        zIndex: 1000,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        // align cell contents to left and right
        gap: 10,
        alignItems: 'center',
      }}>
        <label>GRAVITY ({hyperParams.GRAVITY})</label>
        <input
          type="range"
          min="0"
          max="0.000001"
          step="0.00000001"
          defaultValue={hyperParams.GRAVITY}
          onChange={(e) => {
            newHyperParams.GRAVITY = Number(e.target.value);
          }}
        />
        <label>BASE_MASS ({hyperParams.BASE_MASS})</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          defaultValue={hyperParams.BASE_MASS}
          onChange={(e) => {
            newHyperParams.BASE_MASS = Number(e.target.value);
          }}
        />
        <label>MASS_RANGE ({hyperParams.MASS_RANGE})</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          defaultValue={hyperParams.MASS_RANGE}
          onChange={(e) => {
            newHyperParams.MASS_RANGE = Number(e.target.value);
          }}
        />
        <label>POSITION_RANGE ({hyperParams.POSITION_RANGE})</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          defaultValue={hyperParams.POSITION_RANGE}
          onChange={(e) => {
            newHyperParams.POSITION_RANGE = Number(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setHyperParams(newHyperParams);
          }}
        >Apply</button>
      </div>
    );
  };

  return (
    <div>
      {renderHyperParamsControls()}
      <Canvas
        ref={canvasRef}
        style={{ width: '100vw', height: '100vh' }}
        camera={{
          fov: 75, position: [
            -1.6708526988139725,
            0.8120617796947767,
            0.17087966575176392
          ],
          rotation: [
            -1.8202957936930064,
            -0.9333711685908157,
            -1.8778409980573376
          ]
        }} // Adjust the camera position as needed
      >
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[10, 10, 5]} /> */}
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <OrbitControls />

        {/* <Sphere position={[0, 0, 0]} /> */}
        {/* <HoverCar/> */}
        {/* <RaceTrack/> */}
        <ParticleSystem hyperParams={hyperParams} />
      </Canvas>
    </div>
  )
}

export default App
