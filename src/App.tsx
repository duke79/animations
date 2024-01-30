import { Canvas } from 'react-three-fiber';
import './App.css';
import Sphere from './modules/sphere/Sphere';
import HoverCar from './modules/hover-car/HoverCar';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls />

        {/* <Sphere position={[0, 0, 0]} /> */}
        <HoverCar />
      </Canvas>
    </div>
  )
}

export default App
